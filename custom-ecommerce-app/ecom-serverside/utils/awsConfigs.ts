import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

const awsConfig ={
    "region": process.env.REGION,
    "endpoint": process.env.ENDPOINT,
    "accessKeyId": process.env.AWS_KEYID,
    "secretAccessKey": process.env.AWS_SECRETKEY
}

AWS.config.update(awsConfig);

export const docClient = new AWS.DynamoDB.DocumentClient();
export const tableName = process.env.TABLENAME as string;
