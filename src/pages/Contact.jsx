import React from 'react'

function Contact() {
    return (
        <div className='absolute bg-gray top-0 right-0 h-full w-[80%] px-[10%]'>
            <h1 className='text-center text-8xl font-bold uppercase text-black font border-dotted border-black border-2 mt-8 py-4'>Contact Me</h1>
            <div className='flex justify-center relative'>
                <form action="/" className='mt-5 w-[60%] bg-yellow backdrop-blur-sm rounded-2xl p-5'>
                    <span className='block text-2xl text-center font-bold'>Your Info</span>
                    <div className='mt-5'>
                        <input className='bg-gray w-full rounded-lg px-2 py-2 my-1' type="text" placeholder='First Name'/><br />
                        <input className='bg-gray w-full rounded-lg px-2 py-2 my-1' type="text" placeholder='Last Name'/><br />
                        <input className='bg-gray w-full rounded-lg px-2 py-2 my-1' type="text" placeholder='Email Id'/><br />
                        <input className='bg-gray w-full rounded-lg px-2 py-2 my-1' type="text" placeholder='Phone Number'/><br />
                        <textarea className='bg-gray w-full rounded-lg px-2 py-2 my-2' placeholder='Message'></textarea>
                        <button type='submit' className='bg-black text-white py-2 px-6 mt-2 rounded-full font-bold hover:opacity-90'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact