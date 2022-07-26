import 'reflect-metadata';
import 'express-async-errors';

import '@/shared/containers/';

import express, { Application, NextFunction, Request, Response } from "express";
import bodyParser from 'body-parser';

import router from '@/app/api/routes';
import { connectDatabase } from "@/app/database";

const app: Application = express();
const port: number = 3380;

app.use(bodyParser.json());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "Object Oriented Architecture" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    throw new Error(err.message);
});

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
});

connectDatabase();