import OrderSchema from '../entities/deals'
import { IorderDTO } from '../../../domain/interfaces/orders.DTO'
class Core {

  public async saveOrders(orders: any) {
    try {
      await orders.pedidos.map(async (order: any) => {
        const payload: IorderDTO = {
          client: order.pedido.cliente.nome,
          date: order.pedido.data,
          value: order.pedido.totalvenda
        }
        return await OrderSchema.create({ ...payload });
      })
    } catch (error) { throw error }
  }

  public async getOrders() {
    const orders = await OrderSchema.aggregate([
      {
        $sort: {
          value: -1,
          numero: 1,
        },
      },
      {
        $project: {
          value: '$value',
          client: '$client',
          date: { $dateToString: { format: '%d/%m/%Y', date: '$createdAt' } },
        },
      },
      {
        $group: {
          _id: '$date',
          total: { $sum: '$value' },
          orders: {
            $push: '$$ROOT',
          },
        },
      },
    ]);
    return orders;
  }
}

export default new Core()