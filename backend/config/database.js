import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to mongoDB");
    }).catch((error)=>{
=======

// const MONGO_URI="mongodb+srv://anjanabhishek7017:twitterclone@cluster0.enox4gv.mongodb.net/"
const MONGO_URI="mongodb+srv://anjanabhishek7017:twitterclone@cluster0.enox4gv.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
const databaseConnection = () =>{
    mongoose.connect(MONGO_URI).then(()=>{
        console.log("Connected to moongoose")
    }).catch((error) => {
>>>>>>> 1854dd8320472a50504cb80257643efe7eed0a6b
        console.log(error);
    })
}
<<<<<<< HEAD
export default databaseConnection;
=======

export default databaseConnection;
>>>>>>> 1854dd8320472a50504cb80257643efe7eed0a6b
