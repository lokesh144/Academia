import mongoose,{ Schema, model } from 'mongoose';

const noticeSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    selectedClasses:{
        type:[String],
        default:[],
    },
    
},{timestamps:true});
const eventSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{timestamps:true});

//Define the model or the collection name
const Notice=mongoose.models.Notice || new model("Notices",noticeSchema);
const Event=mongoose.models.Event || new model("Event",eventSchema);

export {Notice,Event};