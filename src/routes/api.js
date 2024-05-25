import express from "express";
import {CreateProfile, SelectProfile, ShowProfile, UserLogin} from "../controllers/ProfileController.js"
import { Authentication } from "../middleware/AuthVeryfyMiddleware.js";

 const router  = express.Router();


 router.post("/CreateProfile",CreateProfile);
 router.get("/",ShowProfile);
 router.post("/UserLogin",UserLogin);
 router.get("/SelectProfile",Authentication,SelectProfile);


  export  default router;