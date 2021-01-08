import { Router } from 'express'
import Business from '../../src/domain/application/pipedrive'

const routes = Router();

// Rota para teste de integração
routes.get('/deals/:user_id', Business.execute);

export { routes }