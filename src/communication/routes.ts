import { Router } from 'express'
import Operations from '../domain/application/operations'
import Persistence from '../domain/application/persistence'
import Query from '../domain/application/query'

const routes = Router();

routes.get('/operations/:status', Operations.execute);
routes.post('/persistence/', Persistence.execute);
routes.get('/orders/', Query.execute);

export { routes }