import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import produtoRoute from './routers/produto.routes'
import { dataSource } from "./database/database"

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express();

const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(produtoRoute)

app.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ message:'hello word'});
})


app.listen(port, () => console.log('listening on port http://localhost:' + port));