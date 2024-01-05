import React from 'react'
import { LuDot } from "react-icons/lu";
import { Navigate } from "@/lib/FullScroll"


function Navbar() {
    const ThreeDot = () => {
        return (
            <div className='my-1 w-full h-auto items-center flex flex-col text-[9px]'>
                <LuDot /><LuDot /><LuDot />
            </div>
        )
    }
    const LinkText = ({ name, target }) => {
        return (
            <>
                <div className='text-xl font-bold text-white cursor-pointer' onClick={() => {
                    Navigate(target)
                }}>
                    {name}
                </div>
                <ThreeDot />
            </>
        )
    }
    return (
        <div className='fixed w-[20%] h-full bg-yellow z-10'>

            <div className='w-full h-[30%] bg-red-50'><img src="/images/iam.jpg" className='w-full h-full object-cover' alt="my image" /></div>
            <div className='w-full h-[70%] flex flex-col items-center justify-center'>
                <div className='w-[8px] h-[8px] bg-black rounded-full'></div>
                <ThreeDot />
                <LinkText name="Home" target="home" />
                <LinkText name=" About Me" target="about" />
                <LinkText name="Resume" target="resume" />
                <LinkText name="Portfolio" target="portfolio" />
                <LinkText name="Contact" target="contact" />
                <div className='w-[8px] h-[8px] bg-black rounded-full'></div>
            </div>
        </div>
    )
}

export default Navbar