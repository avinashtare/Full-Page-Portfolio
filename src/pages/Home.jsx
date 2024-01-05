import React from 'react'
import { Navigate } from "@/lib/FullScroll"
function home(props) {
  return (
    <div className='flex w-full h-full'>
      <div className="info w-[50%] h-full flex items-center justify-center">
        <div className='w-[60%]'>
          <h3 className='text-3xl font-bold'>HI THERE!</h3>
          <h1 className='text-5xl font-bold mt-3 mb-1'>I'M <span className='text-yellow font-stylest font-extrabold'>Avinash</span></h1>
          <h4 className='bg-yellow mb-5 text-black inline-block px-2 my-2 font-bold'>Web Developer/Designer</h4>
          <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit debitis blanditiis delectus? Deleniti, aliquam cum. Dolorem quo ratione illum eum alias perspiciatis necessitatibus sapiente?</p>
          <button className='bg-yellow text-white py-2 px-6 mt-4 rounded-full font-bold hover:opacity-90' onClick={() => { Navigate("about") }}>More About Me</button>
        </div>
      </div>

      <div className="my-img w-[50%] h-full bg-gray overflow-hidden select-none pointer-events-none">
        <img src="/images/iam.jpg" className='w-full h-full object-cover' alt="my image" />
      </div>
    </div>
  )
}

export default home