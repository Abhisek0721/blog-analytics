import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import properties from "./src/config/properties";
import blogRouter from "./src/apis/routers/blogRouter";

dotenv.config();

const app:Express = express();

const port:number = properties.PORT;
const serverUrl:string = properties.SERVER_URL;

app.use(cors());
app.use(express.json());

app.use("/api", blogRouter);

app.get("/",async (req:Request, res:Response) => {
  return res.send(`<h1>Running on Port : ${port}</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Open Browser: http://localhost:${port}`);
});
