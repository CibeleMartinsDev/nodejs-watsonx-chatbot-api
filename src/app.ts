import express from "express";
import cors from "cors";
import logger from "morgan";
import {router } from "./routes/routes"
import dotenv from "dotenv"
export const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use('/', router)