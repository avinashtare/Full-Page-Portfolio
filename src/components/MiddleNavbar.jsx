import React from 'react'
import { FaHome } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { PiBagFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { BsFillSendFill } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { Navigate } from "@/lib/FullScroll"


function MiddleNavbar() {
    return (
        <div className='top-[50%] left-[95%] w-10 py-4 -translate-y-2/4 -translate-x-2/4 bg-yellow  rounded-full fixed overflow-x-hidden z-10'>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center text-white text-xl cursor-pointer my-1' onClick={()=>{Navigate("home")}}>
                    <FaHome />
                </div>
                <div className=' w-full h-auto items-center flex flex-col text-[8px]'>
                    <LuDot /><LuDot /><LuDot />
                </div>

                <div className='flex justify-center items-center text-white text-xl cursor-pointer my-1' onClick={()=>{Navigate("about")}}>
                    <GrUserManager />
                </div>
                <div className=' w-full h-auto items-center flex flex-col text-[8px]'>
                    <LuDot /><LuDot /><LuDot />
                </div>


                <div className='flex justify-center items-center text-white text-xl cursor-pointer my-1' onClick={()=>{Navigate("resume")}}>
                    <PiBagFill />
                </div>
                <div className=' w-full h-auto items-center flex flex-col text-[8px]'>
                    <LuDot /><LuDot /><LuDot />
                </div>

                <div className='flex justify-center items-center text-white text-xl cursor-pointer my-1' onClick={()=>{Navigate("portfolio")}}>
                    <CgWebsite />
                </div>
                <div className=' w-full h-auto items-center flex flex-col text-[8px]'>
                    <LuDot /><LuDot /><LuDot />
                </div>

                <div className='flex justify-center items-center text-white text-xl cursor-pointer my-1' onClick={()=>{Navigate("contact")}}>
                    <BsFillSendFill />
                </div>

            </div>
        </div>
    )
}

export default MiddleNavbar