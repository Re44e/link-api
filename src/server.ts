import { app } from './app'
import mongoose from 'mongoose'
require('dotenv').config()

const PORT = process.env.SERVER_PORT;
const uri = `mongodb+srv://re44e:${process.env.DB_PASSWORD}@cluster.vin0c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database enabled...')
    app.listen(PORT, () => console.log(`Server listening to the port: ${PORT}`));
  })
  .catch((error) => console.log(`Database connection error:  ${error}`))
