import React from 'react'
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>

                    <Avatar src="https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg" size="40" round={true} />

                    <div className='ml-2'>
                        <div className='flex items-center'>
                            <h1 className='font bold'>Abhishek</h1>
                            <p className='text-gray-500 text-sm ml-2'>@Abhishek7017 .1m</p>
                        </div>
                        <div>
                            <p>Hello developers lets connect and grow together</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                            <FaRegComment size="20px"/>
                            <p className='ml-3'>0</p>
                            </div>
                            <div className='flex items-center'>
                            <FaRegHeart size="24px"/>
                            <p className='ml-3'>0</p>
                            </div>
                            <div className='flex' items-center>
                                <CiBookmark size="24px"/>
                                <p className='ml-3'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet