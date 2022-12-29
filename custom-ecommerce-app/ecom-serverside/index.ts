import express, { Application, Request, Response } from "express";
// required to read variables from env file
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });

    // route for sign in 
    const singinRoute = require("./handlers/signinHandler");
    app.use('/signin', singinRoute);

    // TODO: route for signup
} catch (error:any) {
    console.error(`Error occured: ${error.message}`);
}