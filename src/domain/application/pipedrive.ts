import Pipedrive from '../../infrastructure/external/pipedrive'
import { Request, Response } from 'express'

class Business {
  execute = async (req: Request, res: Response): Promise<void> => {
    const { user_id } = req.params
    let input = {
      userId: user_id
    }
    try {
      const deals = await Pipedrive.DealsController.getAllDeals(input);
      res.status(200).json({ message: "Dados obtidos com sucesso...", deals });
    } catch (error) {
      res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
    }
  }
}
export default new Business();
