import React from 'react'

function about() {
    return (
        <div className='absolute bg-gray top-0 right-0 h-full w-[80%] px-[8%]'>
            <h1 className='text-center text-8xl font-bold uppercase text-black font border-dotted border-black border-2 mt-8 py-4'>About Me</h1>
            <h2 className='text-3xl my-3'>I'm <span className='font-bold text-black'>Avinash Tare</span>,Web Developer/Designer</h2>
            <p className='text-neutral-600 font-thin text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse rem iste quasi quas consequuntur dolorem, ratione illo reprehenderit quo voluptatum obcaecati qui minus quam? Atque quam labore accusantium dicta, modi, incidunt maiores soluta quasi omnis animi enim iusto illo iure quod optio cumque voluptas excepturi reiciendis nostrum blanditiis assumenda nam possimus, in distinctio. Possimus cum ratione incidunt porro dolores, atque magnam similique autem tempore. Dolore repellendus nisi ex dolores beatae.</p>
            <div className='w-full h-[280px] flex my-6'>
                <div className='w-[60%] h-full'>
                    <div className='bg-black w-full h-full flex flex-wrap p-4'>
                        <div className='w-2/4 h-2/4 flex items-center justify-center flex-col border-dotted border-r-2 border-b-2 border-gray'>
                            <span className='text-5xl text-yellow font-bold'>5+</span>
                            <span className='text-sm text-white '>YEARS EXPERIENCE</span>
                        </div>
                        <div className='w-2/4 h-2/4 flex items-center justify-center flex-col border-dotted border-b-2 border-gray'>
                            <span className='text-5xl text-yellow font-bold'>70+</span>
                            <span className='text-sm text-white'>PROJECT DONE</span>
                        </div>
                        <div className='w-2/4 h-2/4 flex items-center justify-center flex-col border-dotted border-r-2 border-gray'>
                            <span className='text-5xl text-yellow font-bold'>250+</span>
                            <span className='text-sm text-white'>HAPPY CLIENTS</span>
                        </div>
                        <div className='w-2/4 h-2/4 flex items-center justify-center flex-col'>
                            <span className='text-5xl text-yellow font-bold'>1M+</span>
                            <span className='text-sm text-white'>FOLLOWERS</span>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] h-full pl-5'>
                    <div className='w-full h-full'>
                        <h2 className='text-2xl font-semibold text-black'>What I Do?</h2>
                        <div>
                            <div className='w-full h-[80px] flex'>
                                <div className='w-[30%] h-full'>
                                    <img src="/images/pen.png" className='w-full h-full object-cover' alt="my pen" />
                                </div>
                                <div className='w-[70%] h-full bg-red ml-3 overflow-hidden'>
                                    <h4 className='text-1xl font-semibold text-black'>PRINT DESIGN</h4>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur repellat magni fugiat placeat vitae et, reiciendis praesentium.</p>
                                </div>
                            </div>
                            <div className='w-full h-[80px] flex'>
                                <div className='w-[30%] h-full'>
                                    <img src="/images/webpage.png" className='w-full h-full object-cover' alt="my webpage" />
                                </div>
                                <div className='w-[70%] h-full bg-red ml-3 overflow-hidden'>
                                    <h4 className='text-1xl font-semibold text-black'>WEBPAGE DESIGN</h4>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur repellat magni fugiat placeat vitae et, reiciendis praesentium.</p>
                                </div>
                            </div>
                            <div className='w-full h-[80px] flex'>
                                <div className='w-[30%] h-full'>
                                    <img src="/images/developer.png" className='w-full h-full object-cover' alt="developer" />
                                </div>
                                <div className='w-[70%] h-full bg-red ml-3 overflow-hidden'>
                                    <h4 className='text-1xl font-semibold text-black'>WEBSITE DEVELOPER</h4>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur repellat magni fugiat placeat vitae et, reiciendis praesentium.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
