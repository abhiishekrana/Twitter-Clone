import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
  

    const submitHandler = async (e) => {
        const USER_API_END_POINT = "twitter-clone-roan-nine.vercel.app";
        e.preventDefault();
        // console.log(name, username, email, password);
        if (isLogin) {
            //login
            try {
                const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    withCredentials: true
                });
                
                console.log(res);
                if (res.data.success) {
                    navigate("/");
                }
            } catch (error) {
                console.log(error)
            }
        } else if (!isLogin) {
            //signup
            try {
                const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    withCredentials: true
                })
                console.log(res);
                if (res.data.success) {
                    setIsLogin(true)
                  
                }

            } catch (error) {
              
                console.log(error)
            }
        }
    }


    const loginSignupHandler = () => {
        setIsLogin(!isLogin)
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex item-center justify-evenly w-[80%]'>
                <div >
                    <img width={"300px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFi9C47XQalTb6PO2FPWStyMpqlR4cBJhDw&s' alt='twitter-logo'></img>

                </div>
                <div className='ml-5'>
                    <div className='font-bold text-6xl'>
                        <h1>Happing now.</h1>
                    </div>
                    <h1 className='font-bold text-2xl mt-2'>{isLogin ? "Login" : "Signup"}</h1>
                    <form onSubmit={submitHandler} className='flex flex-col w-[55%]'>
                        {
                            !isLogin && (<>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                            </>)
                        }
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                        <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>
                        <h1>{isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></h1>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
