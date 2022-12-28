import express, { json } from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"   
import roomsRoute from "./routes/rooms.js"
//import bodyParser from "body-parser";


dotenv.config()
const app = express();



mongoose.set('strictQuery',false);
const connect = async () =>{
try{

await mongoose.connect(process.env.MONGO)
console.log("Connected to mongodb")
  }catch(err){
      throw err;

  }
};
mongoose.connection.on("connected",()=>{
  console.log("mongodb connected")
})
mongoose.connection.on("disconnected",()=>{
  console.log("mongodb disconnected")
});



//middlewares 
app.use(express.json())

//app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
  const erroStatus = err.status || 500
  const erroMessage = err.message || "Something went Wrong!"
 return res.status(erroStatus).json({
  success: false,
  status: erroStatus,
  message: erroMessage,
  stack: err.stack,
 })
 
})
 app.listen(8800, ()=>{
  connect();
 //Backend Connected message
console.log("Connected to backend !")

 })