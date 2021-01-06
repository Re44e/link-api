import express from 'express';
import bodyparser from 'body-parser'
import compression from 'express';

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/* Middleware de compactação Gzip para ortimizar o desempenho das requisições */
app.use(compression());



export { app };