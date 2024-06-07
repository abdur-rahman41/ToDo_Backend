
import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    
    UserName:{ type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate: {type:Date}
},
{
    versionKey:false
}
);

export const TodoListModel = mongoose.model('TodoList',DataSchema);