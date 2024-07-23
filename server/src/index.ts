import express,{Express,Response,Request} from 'express';
import dotenv from 'dotenv';

const app:Express = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`server running in port: ${port} number`))