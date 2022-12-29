import { docClient, tableName } from "../utils/awsConfigs";

export const handleSignUp = async(email:string, password:string, username:string) => {
    
    const data = {
        "PK": email,
        "SK": password,
        "username": username,
    }

    const transactionItem = {
        TableName: tableName,
        Item: data
    };

    docClient.put(transactionItem, function (err) {
        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::save::success");
        }
    });



}