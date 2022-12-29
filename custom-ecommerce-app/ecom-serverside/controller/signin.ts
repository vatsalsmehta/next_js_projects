import { SignInBody } from "../models/models"
import { handleSignUp } from "./signup";

export const handleSignIn = async(signInbody: SignInBody) => {
    // logic for sign in
    let userDetails = {};
    const isPasswordValid = true;
    const isEmailValid = true;

    if (!isEmailValid) {
        return {
            "status": 401,
            "errormessage": "Invalid Email"
        }
    }

    if (!isPasswordValid) {
        return {
            "status": 401,
            "errormessage": "Invalid Password"
        }
    }
    handleSignUp("pk@gmail.com", signInbody.password, signInbody.username);
    return{
        "status": 200,
        "userDetails": userDetails
    }
}