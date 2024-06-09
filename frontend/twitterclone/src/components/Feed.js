import React from 'react'
import Createpost from './Createpost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%] border border-grey-200'>
        <Createpost/>
        <Tweet/>
        <Tweet/>
       
    </div>
  )
}

export default Feed