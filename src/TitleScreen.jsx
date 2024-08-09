import React from 'react'
import logo from './capXlogo.webp'
import { IoReorderThreeOutline } from "react-icons/io5";


const TitleScreen = () => {
  return (
    
    <div >
      <div className='flex mt-10 lg:mt-2 bg-[#56525243] lg:gap-4 lg:mx-96 gap-24 mx-2 px-8 lg:w-1/2 py-5 rounded-3xl lg:rounded-full'>
        <img src={logo} className='lg:file:h-20 w-40 lg:ml-16 ' alt="CapX" />
        <h5 className='border-r-2 hidden lg:flex border-slate-500 h-10 items-center mt-5'> </h5> {/* just to make border */ }
        <button className='hidden lg:flex bg-[#ED8E36] text-3xl my-2 px-14 rounded-3xl items-center'>Join Waitlist</button>
        <h5 className='border-r-2 lg:flex hidden border-slate-500 h-10 items-center mt-5'> </h5> {/* just to make border */ }
        <IoReorderThreeOutline className='lg:text-yellow-500 text-slate-300 lg:mt-2 ml- text-6xl'/>

      </div>
      <div id='desc' className='lg:mx-48 my-36'> {/* id speficied for font-family  */ }
        <h1 className="lg:text-7xl text-4xl font-bold text-center mx-8  text-white">
        An AI-Powered trading platform that works as your personal assistant
        </h1>
        <p className='text-[#FFE8D1] lg:font-semibold lg:text-3xl mx-2 text-xl text-center my-9'>Research to investing,all-in-one place</p>
      </div>
    </div>
  )
}

export default TitleScreen
