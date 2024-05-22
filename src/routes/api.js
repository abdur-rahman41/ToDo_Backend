import express from "express";

 const router  = express.Router();


 router.get("/create/",(req,res)=>{

    res.send("Java Script");
 });

  export  default router;