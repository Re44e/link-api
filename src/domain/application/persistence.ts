import Bling from '../../infrastructure/services/bling'
import Repositories from '../../infrastructure/standard/repositories/core'
import { Request, Response } from 'express'
class Persistence {
  execute = async (req: Request, res: Response): Promise<Response> => {
    try {
      
      // Operação para obter os pedidos armazenados no Bling.
      const orders = await Bling.getAllOrders();
      
      // Operação para armazenar os pedidos na base de dados.
      //await Repositories.saveOrders(orders);

      return res.status(200).json({ message: "Operação realizada com sucesso..." });
    } catch (error) {
      return res.status(401).json({ message: "Erro: consulte administração..." });
    }
  }
}
export default new Persistence();