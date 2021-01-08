import { app } from './app'
import mongoose from 'mongoose'

const PORT = process.env.SERVER_PORT || 5000;
const uri = `mongodb+srv://re44e:linkapi@cluster.vin0c.mongodb.net/linkapi?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected database...')
    app.listen(PORT, () => console.log(`Server listening to the port: ${PORT}`));
  })
  .catch((error) => console.log(`Database connection error:  ${error}`))
