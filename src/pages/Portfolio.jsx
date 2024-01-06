import React from 'react'

function Portfolio() {
    return (
        <div className='absolute bg-gray top-0 right-0 h-full w-[80%] px-[10%]'>
            <h1 className='text-center text-8xl font-bold uppercase text-black font border-dotted border-black border-2 mt-8 py-4'>Portfolio</h1>
            <div className='mt-6'>
                <div className='flex justify-around text-black font-bold'>
                    <span className='cursor-pointer'>ALL</span>
                    <span className='cursor-pointer'>GRAPHIC DESGIN</span>
                    <span className='cursor-pointer'>WEB DESGIN</span>
                    <span className='text-white cursor-pointer'>PHOTOGRAPHY</span>
                </div>
                <div className='mt-5 m-10 flex flex-wrap justify-center items-center'>
                    <div className='w-[300px] h-[180px] overflow-hidden mx-2 my-1'>
                        <img className='w-full h-full object-cover' src="/images/photography-1.png" alt="" />
                    </div>
                    <div className='w-[300px] h-[180px] overflow-hidden mx-2 my-1'>
                        <img className='w-full h-full object-cover' src="/images/photography-2.png" alt="" />
                    </div>
                    <div className='w-[300px] h-[180px] overflow-hidden mx-2 my-1'>
                        <img className='w-full h-full object-cover' src="/images/photography-3.png" alt="" />
                    </div>
                    <div className='w-[300px] h-[180px] overflow-hidden mx-2 my-1'>
                        <img className='w-full h-full object-cover' src="/images/photography-4.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio