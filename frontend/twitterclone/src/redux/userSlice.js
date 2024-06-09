import {createSlice} from "@reduxjs/toolkit"
import { getOtherUsers } from "../../../../backend/controllers/userController";
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null
    },
    reducers:{
        //multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        }
    }
})
export const {getUser,getOtherUsers}=userSlice.actions
export default userSlice.reducer