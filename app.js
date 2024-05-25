import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes/api.js"




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
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(xxs());
app.use(hpp());


//bodyparser Implement

app.use(bodyParser.json());



//Request Rate Limit

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

let URI = "mongodb://127.0.0.1:27017/ToDo";
let options = {user:'',pass:'',autoIndex:true};
mongoose.connect(URI,options)
.then(
	()=>{
		console.log("Mongo is connected");
	}
)
.catch((error)=>{
	console.log(error);
});



app.use("/api/v1",router);
export default app;