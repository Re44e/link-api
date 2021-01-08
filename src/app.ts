import express from 'express';
import compression from 'express';
import { routes } from './communication/routes'

const app = express();
app.use(express.json());

/* Middleware de compactação Gzip para ortimizar o desempenho das requisições */
app.use(compression());
app.use(routes);

export { app };