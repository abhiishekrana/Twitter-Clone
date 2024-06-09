import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";


const Createpost = () => {
    return (
        <div>
            <div className='w-[100%]'>
                <div className='flex item-center justify-evenly border-b border-grey-300'>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-grey-600 text-lg cursor-pointer'>For you</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-grey-600 text-lg cursor-pointer'>Following</h1>
                    </div>
                </div>

                <div className='m-4 flex item-center'>
                    <div>

                        <Avatar src="https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg" size="40" round={true} />

                    </div>
                    <input className='ml-2 w-full outline-none border-none text-lg' type="text" placeholder='What is happining?!' />
                </div>
                <div className='flex item-center justify-between my-4 border-b border-gray-200'>
                    <div>
                        <CiImageOn />
                    </div>
                    <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Createpost