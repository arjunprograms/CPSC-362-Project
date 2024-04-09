import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProfileCard = (user) => {
    const { user: data, edit } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return <div>
        <div className='w-full bg-primary flex flex0col items-center shadow-sm rounded-xl px-6 py-4'>
            <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645}'></div>
        </div>
    </div>;
};

export default ProfileCard