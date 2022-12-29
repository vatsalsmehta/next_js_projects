import { SignInBody } from "../models/models"

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

    return{
        "status": 200,
        "userDetails": userDetails
    }
}