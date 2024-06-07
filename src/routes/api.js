import express from "express";
import {CreateProfile, SelectProfile, ShowProfile, UserLogin,UpdateProfile} from "../controllers/ProfileController.js"
import { Authentication } from "../middleware/AuthVeryfyMiddleware.js";
import { CreateToDo,SelectToDo,UpdateToDo,UpdateStatusToDo,RemoveToDo, SelectToDoByStatus,SelectToDoByDate } from "../controllers/ToDoListController.js";

 const router  = express.Router();


 router.post("/CreateProfile",CreateProfile);
 router.get("/",ShowProfile);
 router.post("/UserLogin",UserLogin);
 
 router.get("/SelectProfile",Authentication,SelectProfile);
 router.post("/UpdateProfile",Authentication,UpdateProfile);


 router.post("/CreateToDo",Authentication,CreateToDo);
 router.get("/SelectToDo",Authentication,SelectToDo);
 router.post("/UpdateToDo",Authentication,UpdateToDo);
 router.post("/UpdateStatusToDo",Authentication,UpdateStatusToDo);
 router.post("/RemoveToDo",Authentication,RemoveToDo);
 router.post("/SelectToDoByStatus",Authentication,SelectToDoByStatus);
 router.post("/SelectToDoByDate",Authentication,SelectToDoByDate);
 

  export  default router;