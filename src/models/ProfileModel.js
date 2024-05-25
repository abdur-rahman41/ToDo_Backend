import mongoose from 'mongoose';



const Schema = mongoose.Schema;

const DataSchema = new Schema({
    FirstName: {
      type:String,
     
    },
    LastName:{
      type:String,
    },
    Email:{
      type:String,
    },
    MobileNumber:{
      type:String,
      
    },
    City:{
      type:String,
    },
    UserName:{
        type:String,
        unique:true,
    },
    Password:{
      type:String,

    }

  

  },
  {
    versionKey:false
  }
);

export const profileModel = mongoose.model('profiles',DataSchema);