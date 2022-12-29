import express, { Application, Request, Response } from "express";
import { handleSignIn } from "../controller/signin";
import { BadRequestError, errorResponse } from "../utils/error";
const app: Application = express();


// handler for sign in
app.post("/", async(req:Request, res:Response) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            throw new BadRequestError('Request Body is missing');
        }

        if (!req.body.username || !req.body.password) {
            throw new BadRequestError('both id and password are required');
        }

        const signInRepsonse = await handleSignIn(req.body);
        
        res.status(signInRepsonse.status).send({
            "body": signInRepsonse.userDetails ?
            signInRepsonse.userDetails :
            signInRepsonse.errormessage
    });

    } catch (error) {
        return errorResponse(error as Error, res);
    }

})

module.exports = app;