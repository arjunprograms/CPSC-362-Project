import React from 'react'
import { FaReact as DailySocial } from "react-icons/fa";
const Login = () => {
  return (
    <div className='bg-bgcolor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* Left */}
        <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2 bg-[#065ad8] rounded text-white'>
              <DailySocial /> 
            </div>
            <span className='text-2xl text-[#065ad8]' font-semibold>
              ShareFun
            </span>
          </div>
          <p className='text-ascent-1 text-base font-semibold'>
            Log in to your account
          </p>
          <span className='text-sm mt-2 text-ascent-2'>Welcome back</span>

          <form className='py-8 flex flex-col gap-5'>
            {/* <TextInput/> */}
          </form>
        </div>
        {/* Right */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;