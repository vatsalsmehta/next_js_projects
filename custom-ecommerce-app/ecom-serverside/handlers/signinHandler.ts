import express, { Application, Request, Response } from "express";
import { handleSignIn } from "../controller/signin";
const app: Application = express();


// handler for sign in
app.post("/", async(req:Request, res:Response) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send({
                "error" : "Request Body is missing"
            });
        }

        if (!req.body.username || !req.body.password) {
            return res.status(400).send({
                "error" : "Both Username and Password are required Parameters"
            });
        }

        const signInRepsonse = await handleSignIn(req.body);
        res.status(signInRepsonse.status).send({
            "body": signInRepsonse.userDetails ?
            signInRepsonse.userDetails :
            signInRepsonse.errormessage
    });

    } catch (error) {
        return res.status(500).send({
            "error": JSON.stringify(error)
        })
    }
    

})

module.exports = app;