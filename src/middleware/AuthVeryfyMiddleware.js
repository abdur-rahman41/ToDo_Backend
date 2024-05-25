import jwt from "jsonwebtoken";
import express from "express";


   export const Authentication =  (req,res,next)=>{

        let token = req.headers['token-key'];
       // console.log(token);

    jwt.verify(token,'Secretkey1234',(error,decoded)=>{
            if(error)
            {
                res.status(401).json({status:"unauthorized"});
            }
            else
            {
                let username = decoded['data']['UserName'];
                req.headers.username = username;
                next();
            }
    }
    );

    }

