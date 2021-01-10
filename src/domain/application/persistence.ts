import Bling from '../../infrastructure/services/bling'
import { Request, Response } from 'express'

class Persistence {
  execute = async (req: Request, res: Response): Promise<Response> => {
    try {
      const orders = await Bling.getAllOrders();
      return res.status(200).json({ message: "Operação realizada com sucesso...", orders });
    } catch (error) {
      return res.status(401).json({ message: "Erro: consulte administração...", details: error });
    }
  }
}
export default new Persistence();