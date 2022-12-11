import express from 'express';
import dotenv from 'dotenv';
// to use import instead of require just add type:"module" in package.json

dotenv.config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log("listening on port " + port);
})

app.get('/', async(req,res) => {
  console.log("there");
  res.send("Hello");
})

