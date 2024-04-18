import React from 'react'
import { Link } from 'react-router-dom';

const FriendsCard = ({ friends }) => {
  return <div>
    <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5'>
        <div className='flex items-center justify-between text-ascent-1 pb-2 border-b border-[#66666645]'>
            <span>Friends</span>
            <span>{friends?.length}</span>
        </div>

        <div className='w-full flex flex-col gap-4 pt-4'>
            {
                friends?.map((friend) => (
                    <Link 
                        to={"/profile/" + friend?._id}
                        key={friend?._id}
                        className='w-full flex gap-4 items-center cursor-pointer'
                    >
                    </Link>
                ))
            }
        </div>
    </div>
  </div>;
}

export default FriendsCard