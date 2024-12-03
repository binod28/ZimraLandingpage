import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-full '>
            <div className="lg:h-32 bg-[#0F0F35]">
                <div className='w-full h-full flex items-center justify-around'>
                    <div >
                        <h2 className='text-[30px] fira-sans-bold '>Looking for the Best IT Business Solutions?</h2>
                        <p className='text-[15px] fira-sans-regular'>As a app web crawler expert, We will help to organize.</p>
                    </div>
                    <div className='lg:w-44 lg:h-14 grid place-content-center bg-[#2B5EF5] rounded-full fira-sans-bold'>Get a quote</div>
                </div>
            </div>
            <div className='lg:w-full  bg-[#03051E]'>
                <div className='max-w-7xl mx-auto bg-red-500 grid grid-cols-4 lg:h-full place-content-center gap-8'>
                    <div className='lg:w-[300px] bg-orange-500'>1</div>
                    <div className='lg:w-[300px] bg-blue-500'>2</div>
                    <div className='lg:w-[300px] bg-green-500'>3</div>
                    <div className='lg:w-[300px] bg-orange-500'>4</div>
                </div>

            </div>
        </div>
    )
}

export default Footer
