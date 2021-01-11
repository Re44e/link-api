import Bling from '../../infrastructure/services/bling'
import Repositories from '../../infrastructure/standard/repositories/core'
import { Request, Response } from 'express'
class Query {

  execute = async (req: Request, res: Response): Promise<Response> => {
    try {
      const orders = await Repositories.getOrders();
      return res.status(200).json({ message: "Operação realizada com sucesso...", orders });
    } catch (error) {
      return res.status(401).json({ message: "Erro: consulte administração..." });
    }
  }
}
export default new Query();