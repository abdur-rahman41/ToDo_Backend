import { profileModel } from"../models/ProfileModel.js";

import jwt from "jsonwebtoken";

 export const CreateProfile =async(req,res)=>{
        let reqBody = req.body;
     const doc = new profileModel(
      {
         
         
         FirstName:req.body.FirstName,
         LastName:req.body.LastName,
         Email:req.body.Email,
         MobileNumber:req.body.MobileNumber,
         UserName:req.body.UserName,
         Password:req.body.Password
      }
   );
  await doc.save();
  res.send(doc);

}
   

export const UserLogin =async(req,res)=>{
   let UserName = req.body.UserName;
   let Password = req.body.Password;

  const data = await profileModel.find({
      UserName :req.body.UserName,
      Password:req.body.Password
   },
   // (data,error)=>{

   //    if(error)
   //       {
   //          res.status(400).json({status:"fail"});
   //       }
   //       else
   //       {
   //          if(data.length()>0)
   //             {
   //                res.status(200).json({ status:"Success",data:data});
   //             }
   //             else
   //             {
   //                res.status(401).json({staus:"Unauthorizes"});
   //             }
   //       }
         
   // }
).then((data)=>{
   //res.send(data);
   
      
         let payload ={
            exp: Math.floor(Date.now() / 1000) + (24*60 *60),
            data:data[0]
            
         }
        let token = jwt.sign(payload, 'Secretkey1234');
        res.status(200).json({status:"success",token:token,data:data[0]});
      
    

})
.catch((error)=>{
    res.send(error);
});


// try{
//    if(data.length()>0)
//       {
//          res.send(data);

//       //    let payload ={
//       //       exp: Math.floor(Date.now() / 1000) + (24*60 *60),
//       //       data:data[0]
            
//       //    }
//       //   let token = jwt.sign(payload, 'SecretKey1234');
//       //   res.status(200).json({status:"success",token:token,data:data});
//       }
//       else
//       {
//          res.satus(401).json({status:"Unauthorized"});
//       }
// }catch(error)
// {
//  res.send(error);
// }
   


   //res.send(data);




}




export const SelectProfile =async(req,res)=>{
   let UserName = req.headers.username;
   
  const data = await profileModel.find({
      UserName :UserName,
     
   },
  
).then((data)=>{

   
   res.status(200).json({status:"Success",data:data});
    

})
.catch((error)=>{
    res.status(400).json({status:"fail",data:error});
});


}


export const UpdateProfile =async(req,res)=>{
   let UserName = req.headers.username;
   let reqBody=req.body;


   res.status(201).json(reqBody);
   
//   const data = await profileModel.find({
//       UserName :UserName,
     
//    },
  
// ).then((data)=>{

   
//    res.status(200).json({status:"Success",data:data});
    

// })
// .catch((error)=>{
//     res.status(400).json({status:"fail",data:error});
// });


}



export const ShowProfile = (req,res)=>{

      res.send("Hello World");
}