import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";
import {useNavigate } from 'react-router-dom';


const LeftSidebar = () => {
    const navigate = useNavigate();

    const logoutHandler = async () =>{
        try{
            const USER_API_END_POINT="twitter-clone-bk.vercel.app";
            const res = await axios.get(`${USER_API_END_POINT}/logout`);
            navigate('/login');
        }catch(error){

        }
    }

    return (
        <div>
            <div>
                <div className='flex items-center mx-4 w-[20%]'>
                    <img width={"35px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFi9C47XQalTb6PO2FPWStyMpqlR4cBJhDw&s' alt='twitter-logo'></img>
                </div>
            </div>
            <div className='my-4'>
                
                <div className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <CiHome size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Home</h1>
                </div>

                <div className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <CiHashtag size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Explore</h1>
                </div>

                <div className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <IoIosNotificationsOutline size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Notificatios</h1>
                </div>

                <div className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <FaRegUser size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Profile</h1>
                </div>

                <div className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <FaRegBookmark size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                </div>

                <div onClick={logoutHandler}  className='flex items-center px-4 py-2 my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <div>
                        <AiOutlineLogout size={"24px"} />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Logout</h1>
                </div>
                <button className='px-4 py-2 border-none text-md bg-[#109EF0] w-full rounded-full text-white font-white'>Post</button>
            </div>
        </div>
    )
}

export default LeftSidebar
