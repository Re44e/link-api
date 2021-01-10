import { Router } from 'express'
import Operations from '../domain/application/operations'
import Persistence from '../domain/application/persistence'

const routes = Router();

routes.get('/operations/:status', Operations.execute);
routes.get('/persistence/', Persistence.execute);

export { routes }