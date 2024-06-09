import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const RightSidebar = () => {
  return (
    <div className='w-[25%] '>
      <div className='p-2 item-center bg-gray-100 rounded-full outline-none flex'>
        <CiSearch className='mt-3 s-20' />
        <input type="text" placeholder="Search" className='bg-transparent outline-none p-2' />
      </div>
      <div>
        <div className='p-4 bg-gray-100 rounded-2xl my-4'>
          <h1 className='font-bold text-lg'>Who to follow</h1>
          <div className='flex ic justify-between'>
            <div className='flex'>

              <Avatar src="https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg" size="40" round={true} />
              <div className='ml-2'>
                <h1 className='font-bold'>Abhishek</h1>
                <p className='text-sm'>@Abhishek123</p>
              </div>
            </div>
            <button className='px-4 bg-black text-white rounded-full ml-3'>Profile</button>
          </div>
        </div>

        <div>
          <div className='p-4 bg-gray-100 rounded-2xl my-4'>
            <h1 className='font-bold text-lg'>Who to follow</h1>
            <div className='flex ic justify-between'>
              <div className='flex'>

                <Avatar src="https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg" size="40" round={true} />
                <div className='ml-2'>
                  <h1 className='font-bold'>Abhishek</h1>
                  <p className='text-sm'>@Abhishek123</p>
                </div>
              </div>
              <button className='px-4 bg-black text-white rounded-full ml-3'>Profile</button>
            </div>
          </div>
        </div>

        <div>
          <div className='p-4 bg-gray-100 rounded-2xl my-4'>
            <h1 className='font-bold text-lg'>Who to follow</h1>
            <div className='flex ic justify-between'>
              <div className='flex'>

                <Avatar src="https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg" size="40" round={true} />
                <div className='ml-2'>
                  <h1 className='font-bold'>Abhishek</h1>
                  <p className='text-sm'>@Abhishek123</p>
                </div>
              </div>
              <button className='px-4 bg-black text-white rounded-full ml-3'>Profile</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightSidebar