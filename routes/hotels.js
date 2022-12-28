import  express from "express";
import Hotels from "../models/Hotels.js";
const router = express.Router();
//CREATE
router.post("/", async (req, res)=>{
   const newHotel = new Hotels(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        
    } catch (err) {
        res.status(500).json(err);
        
    }
    
});

//UPDATE
router.put("/:id", async (req, res)=>{

    ///const updateHotel = new Hotels(req,res)
 
     try {
         const updateHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true});
         res.status(200).json(updateHotel);
         
     } catch (err) {
         res.status(500).json(err);
         
     }
     
 });

 //DELETE
router.delete("/:id", async (req, res)=>{

    ///const updateHotel = new Hotels(req,res)
 
     try {
         const updateHotel = await Hotels.findByIdAndDelete(
            req.params.id
            );
         res.status(200).json("Hotel has been deleted");
         
     } catch (err) {
         res.status(500).json(err);
         
     }
     
 });

  //GET
router.get("/:id", async (req, res)=>{

    ///const updateHotel = new Hotels(req,res)
 
     try {
         const hotel = await Hotels.find(
            req.params.id
            );
         res.status(200).json(hotel);
         
     } catch (err) {
         res.status(500).json(err);
         
     }
     
 });

  //GET ALL
router.get("/", async (req, res, next)=>{
    const failed =true;
    const err = new Error(); 
    err.status = 404;
    err.message="Sorry not found";
    if (failed) return next(err);
 
     try {
         const Hotels = await Hotels.findById(gfjgsjgsfgg);  
         res.status(200).json(Hotels);
         
     } catch (err) {
       next(err)
         
     }
     
 });
export default router;