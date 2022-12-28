import express, { Application, Request, Response } from "express";
// required to read variables from env file
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World man!"
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error:any) {
    console.error(`Error occured: ${error.message}`);
}