
import { TodoListModel } from "../models/ToDoListModel.js";


   
//    
//   
// }


export const CreateToDo =async(req,res)=>{
    let reqBody = req.body;

   let UserName=req.headers.username;
   let TodoSubject=req.body.TodoSubject;
    let TodoDescription=req.body.TodoDescription;
   let  TodoStatus="New";
   let TodoCreateDate=Date.now();
   let TodoUpdateDate=Date.now();
    //console.log(UserName);
   let postBody={

      UserName:UserName,
      TodoSubject:TodoSubject,
      TodoDescription:TodoDescription,
      TodoStatus:TodoStatus,
      TodoCreateDate:TodoCreateDate,
      TodoUpdateDate:TodoUpdateDate
   }


 const doc =  TodoListModel.create(postBody
  
    
).then((data)=>{

    res.status(200).json(data);
})


}






export const SelectToDo =async(req,res)=>{
    let UserName = req.headers.username;
    console.log(UserName);
    
   const data = await TodoListModel.find({
       UserName :UserName
    },
   
 ).then((data)=>{
 
    
    res.status(200).json({status:"Success",data:data});
     
 
 })
 .catch((error)=>{
     res.status(400).json({status:"fail",data:error});
 });
 
 
 }



 export const UpdateToDo = async (req,res)=>{
    let TodoSubject=req.body.TodoSubject;
    let TodoDescription=req.body.TodoDescription;
    let id=req.body._id;
    let TodoUpdateDate=Date.now();
    //console.log(id);
    let postBody= {
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate

    }

    TodoListModel.updateOne({_id:id},{$set:postBody},{upsert:true})
    .then((data)=>{
         res.status(200).json({status:"Success",data:data});
    })
    .catch((error)=>
    {
        res.status(4001).json(error);
    }
);
 }


 export const UpdateStatusToDo = async (req,res)=>{
    let TodoStatus = req.body.TodoStatus;
    let id=req.body._id;
    let TodoUpdateDate=Date.now();
    //console.log(id);
    let postBody= {
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate

    }

    TodoListModel.updateOne({_id:id},{$set:postBody},{upsert:true})
    .then((data)=>{
         res.status(200).json({status:"Success",data:data});
    })
    .catch((error)=>
    {
        res.status(4001).json(error);
    }
);
 }



 export const RemoveToDo = async (req,res)=>{
   
    let id=req.body._id;
    
    //console.log(id);
    
    TodoListModel.deleteOne({_id:id})
    .then((data)=>{
         res.status(200).json({status:"Success",data:data});
    })
    .catch((error)=>
    {
        res.status(4001).json(error);
    }
);
 }



 export const SelectToDoByStatus =async(req,res)=>{
    let UserName = req.headers.username;
    let id = req.body._id;
    let TodoStatus = req.body.TodoStatus;
    // console.log(UserName);
    
   const data = await TodoListModel.find({
       UserName :UserName,
       TodoStatus:TodoStatus
       
    },
   
 ).then((data)=>{
 
    
    res.status(200).json({status:"Success",data:data});
     
 
 })
 .catch((error)=>{
     res.status(400).json({status:"fail",data:error});
 });
 
 
 }


 export const SelectToDoByDate =async(req,res)=>{
    let UserName = req.headers.username;
    let TodoCreateDate = req.body.TodoCreateDate;
    let FormDate = req.body.FormDate;
    let ToDate = req.body.ToDate;
    // console.log(UserName);
    
   const data = await TodoListModel.find({
       UserName :UserName,
      TodoCreateDate:{$gte:new Date(FormDate),$lte: new Date(ToDate)}
      
       
    },
   
 ).then((data)=>{
 
    
    res.status(200).json({status:"Success",data:data});
     
 
 })
 .catch((error)=>{
     res.status(400).json({status:"fail",data:error});
 });
 
 
 }

