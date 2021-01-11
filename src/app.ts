import express from 'express'
import compression from 'express'
import { routes } from './communication/routes'
import cors from 'cors'

const app = express();
app.use(express.json());

/* Middleware de compactação Gzip para ortimizar o desempenho das requisições */
app.use(compression());
app.use(cors());
app.use(routes);

export { app };