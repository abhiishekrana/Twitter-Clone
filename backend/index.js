import express from "express"
import cookieParser from "cookie-parser";
import databaseConnection from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"
import cors from "cors"

const app = express()
databaseConnection();
const port=8080

//middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser())
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));
//api
app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)

app.get("/home",(req,res)=>{
    res.status(200).json({
        message:"coming from backend..."
    })
})

app.listen(port,()=>{
    console.log(`Server is listing at port ${port}`);
})