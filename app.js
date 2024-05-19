import express from "express";
// import router from "./src/routes/api";
import bodyParser from "body-parser";




const app = express();


//security middleware Lib import

import rateLimit from "express-rate-limit";
import cors from"cors";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import xxs from "xss-clean";
import hpp from "hpp";


//Database Lib import

import mongoose from "mongoose";


//Scurity Middleware Implementation

app.use(cors());
app.use(rateLimit());
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(xxs());
app.use(hpp());


//bodyparser Implement

app.use(bodyParser.json());



//Request Rate Limit

export default app;