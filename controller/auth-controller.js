import User from '../models/user-model.js';
import bcrypt from 'bcrypt';

//Home Logic
const home= async (req,res)=>{
    try {
        const {name,email,phone,password}=req.body;
        console.log(req.body);

        // const userExists=await User.findOne({email});
        // if(userExists){
        //     return res.status(400).json({msg:"Email already exists"});
        // }
        // //hash the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password, saltRound);
        // const Usdata=await User.create({name, email,phone,password:hash_password});
        // res.status(200).json({Usdata});
    } catch (error) {
        // console.log(error);
        res.status(500).json("Internal server error");
    }
}
export default{home};