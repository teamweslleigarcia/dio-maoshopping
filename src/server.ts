import express, { Request, Response } from "express";
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import produtoRoute from './routers/produto.routes'

import './configorm'

const app = express();

const PORT = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/produtos', produtoRoute)

app.get("/usuarios", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ message:'usuários'});
})

app.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ message:'hello word'});
})


app.listen(PORT, () => console.log('listening on port http://localhost:' + PORT));