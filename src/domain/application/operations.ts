import Pipedrive from '../../infrastructure/services/pipedrive'
import Bling from '../../infrastructure/services/bling'
import { Request, Response } from 'express'
import { xmlConverter } from '../../infrastructure/services/resources/xml-converter'

class Operations {
  execute = async (req: Request, res: Response): Promise<Response> => {
    const { status } = req.params
    try {

      // Operação para obter oportunidades com status de ganho no Pipedrive.
      const deals = await Pipedrive.getAllDealsByStatus(status);
      
      // Converte
      const xml = xmlConverter(deals);

      xml.map( async (element: any) => {
      // Operação para registrar as oportunidades no Bling.
        await Bling.registerDeals(element);
      })
    
      return res.status(200).json({ message: "Operação realizada com sucesso..." });
    } catch (error) {
      return res.status(401).json({ message: "Erro: consulte administração...", details: error });
    }
  }
}
export default new Operations();
