import mongoose from "mongoose";

// const MONGO_URI="mongodb+srv://anjanabhishek7017:twitterclone@cluster0.enox4gv.mongodb.net/"
const MONGO_URI="mongodb+srv://anjanabhishek7017:twitterclone@cluster0.enox4gv.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
const databaseConnection = () =>{
    mongoose.connect(MONGO_URI).then(()=>{
        console.log("Connected to moongoose")
    }).catch((error) => {
        console.log(error);
    });
}

export default databaseConnection;
