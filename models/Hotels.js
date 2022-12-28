import mongoose from "mongoose";
const {} = mongoose;



//const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

const HotelSchema = new mongoose.Schema({
    
    name:{
         type:String,
         required:true,
    },    
    type:{
         type:String,
         required:true
    },
//     city:{
//         type:String,
//         required:true
//     },
//     address:{
//         type:String,
//         required:true
//     },
//     distance:{
//         type:String,
//         required:true
//     },
//     photos:{
//         type:[String],
        
//     },
//     title:{
//         type:String,
//         required:true
//     },
//     desc:{
//         type: String,
//         required:true
//     },
   
//     rating:{
//         type: Number,
//      min:0,
//      max:5
//     },
//     rooms:{
//         type:[String]
        
//     },
// // for showing cheapest hotels
//     cheapestPrice:{
//         type:Number,
//         required:true
//     },

//     // for showing featured hotels
//     featured:{
//         type:Boolean,
//         deafult:false,
//     }



});

export default  mongoose.model("Hotels",HotelSchema)