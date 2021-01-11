import { Schema, model, Document } from 'mongoose'
interface Order extends Document {
  date: string
  client: number
  totalSales: number
}

const OrderSchema = new Schema({
  date: { type: Date, required: true },
  client: { type: String, required: true },
  value: { type: Number, required: true }
}, {
  timestamps: true
})

export default model<Order>('Order', OrderSchema)