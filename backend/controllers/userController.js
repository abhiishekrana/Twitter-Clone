import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
    try {

        const { name, username, email, password } = req.body;
        //basic validation
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All the fields are required",
                success: false
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false
            })
        }

        const hashedpassword = await bcryptjs.hash(password, 16)

        await User.create({
            name,
            username,
            email,
            password: hashedpassword
        });

        return res.status(201).json({
            message: "Account create successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All the fields are required",
                success: false
            })
        }
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({
                message: "User does not exists with this name",
                success: false
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: "You are not a authorized user",
                success: false
            })
        }
        const tokenData = {
            userId: user._id
        }
        const tokendata = "njkkwefwwef";
        const token = await jwt.sign(tokenData, tokendata, { expiresIn: "1d" })
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome back ${user.name}`,
            user,
            success: true
        })
    }
    catch {
        console.log(error);
    }
}

export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully",
        success: true
    })
}

export const getOtherUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const othetUsers = await User.find({ _id: { $ne: id } }).select("-password")
        if (!othetUsers) {
            return res.status(401).json({
                message: "Currently do not have any users"
            })
        }
        return res.status(200).json({
            othetUsers
        })

    } catch (error) {
        console.log(error);
    }
}

export const follow = async(req,res)=>{
    try{
        const loggedInUserId = req.body.id;
        const userId = req.params.id;
        const loggedInUser = await User.findById(loggedInUserId)
        const user = await User.findById(userId)
        if(!user.followers.includes(loggedInUserId)){
            await user.updateOne({$push:{followers:loggedInUserId}})
            await loggedInUser.updateOne({$push:{following:userId}})
        }else{
            return res.status(400).json({
                message:`User already followed to ${user.name}`
            })
        }
        return res.status(200).json({
            message:`${loggedInUser.name} just follow to ${user.name}`,
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}