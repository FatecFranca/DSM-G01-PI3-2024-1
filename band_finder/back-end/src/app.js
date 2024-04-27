import dotenv from 'dotenv'
// Carrega as variáveis do arquivo .env
// no objeto global process.env
dotenv.config()

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

/***************************************************
 * ROTAS
***************************************************/

import usuarioRouter from './routes/usuarios.js'
app.use('/usuarios', usuarioRouter)

import projetoRouter from './routes/projetos.js'
app.use('/projetos', projetoRouter)

import postRouter from './routes/posts.js'
app.use('/posts', postRouter)

import vendaRouter from './routes/vendas.js'
app.use('/vendas', vendaRouter)

export default app;