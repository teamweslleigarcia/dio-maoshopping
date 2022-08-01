import express, {Request, Response} from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";

const app = express();

const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ message:'hello word'});

})

app.listen(port, () => console.log('listening on port localhost:' + port));