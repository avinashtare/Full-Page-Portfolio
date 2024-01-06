import React from 'react'

function Resume() {
    const Info = () => {
        return (
            <div className='w-1/3 mx-1'>
                <span className='px-2 py-1 bg-yellow text-white'>2019-2024</span>
                <h4 className='text-xl font-semibold mt-2'>Computer Science</h4>
                <p className='text-neutral-600 font-thin text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse rem iste quasi quas consequuntur dolorem, ratione illo reprehenderit quo voluptatum obcaecati qui minus quam..</p>
            </div>
        )
    }
    return (
        <div className='absolute bg-gray top-0 right-0 h-full w-[80%] px-[10%]'>
            <h1 className='text-center text-8xl font-bold uppercase text-black font border-dotted border-black border-2 mt-8 py-4'>Resume</h1>
            <h4 className='text-3xl font-bold mt-2'>Education</h4>

            <div className='mt-4'>
                <div className='flex'>
                    <Info />
                    <Info />
                    <Info />
                </div>
                <div className='w-full h-1 my-3 border-t-4 border-black border-dotted'></div>
                <div className='flex'>
                    <Info />
                    <Info />
                    <Info />
                </div>
            </div>
        </div>
    )
}

export default Resume