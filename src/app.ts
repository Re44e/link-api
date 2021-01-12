import express from 'express'
import compression from 'express'
import { routes } from './communication/routes'
import cors from 'cors'
import helmet from 'helmet'

const app = express();
app.use(express.json());

/* Middleware de compactação Gzip para ortimizar o desempenho das requisições */
app.use(compression());

/* Coleção de funções de middlewares de segurança: Proteção contra vulnerabilidades conhecidas na web */
app.use(helmet());

app.use(cors());
app.use(routes);

export { app };