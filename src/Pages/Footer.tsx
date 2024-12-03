import React from 'react'
import { FaRegPaperPlane, FaTwitter, FaBasketballBall, FaBehance } from "react-icons/fa";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='w-full h-full lg:py-10 bg-[#03051E]'>
            <div className="lg:h-32 ">
                <div className='w-full h-full flex items-center justify-around'>
                    <div >
                        <h2 className='text-[30px] fira-sans-bold '>Looking for the Best IT Business Solutions?</h2>
                        <p className='text-[15px] fira-sans-regular'>As a app web crawler expert, We will help to organize.</p>
                    </div>
                    <div className='lg:w-44 lg:h-14 grid place-content-center bg-[#2B5EF5] shadow-lg rounded-full fira-sans-bold'>Get a quote</div>
                </div>
            </div>
            <div className='lg:w-full h-[65vh]  '>
                <div className='max-w-7xl  mx-auto grid grid-cols-4 lg:h-[65vh] justify-items-center gap-8 lg:py-20 lg:px-8 '>
                    <div className='lg:w-[300px] flex flex-col gap-6'>
                        <div><h3 className='text-[1.7em] text-white fira-sans-bold'>Itfirm</h3></div>
                        <p className='text-[15px] text-white leading-[1.8]'>We work with a passion of taking challenges and creating new ones in advertising sector</p>
                        <div className='lg:w-24 lg:h-8 rounded-full grid place-content-center bg-button-gradient fira-sans-regular font-[600] text-[15px] '>About us</div>
                    </div>
                    <div className='lg:w-[300px] flex flex-col  gap-4'>
                        <div><h3 className='text-[1.7em] text-white fira-sans-bold'>Newsletter</h3></div>
                        <span className='w-8 border-t border-[#1475F7]'></span>
                        <p className='text-[15px] text-white leading-[1.8]'>Subscribe our newsletter to get our latest update & news.</p>
                        <div className='lg:w-full h-11 flex'>
                            <input type='email' placeholder='your email address' className='w-48 h-full lg:pl-4 text-[15px] bg-[#0F0F35]' />
                            <div className='h-full w-16 bg-button-gradient grid place-content-center'>
                                <FaRegPaperPlane size={20} color='white' />
                            </div>
                        </div>
                        <div className='w-full h-8 flex items-center gap-5'>
                            <div>
                                < FaFacebookF size={16} className='text-gray-700 hover:text-[#089BFF]' />
                            </div>
                            <div>
                                <FaTwitter size={16} className='text-gray-700 hover:text-[#089BFF]' />
                            </div>

                            <div>
                                <FaBasketballBall size={16} className='text-gray-700 hover:text-[#089BFF]' />
                            </div>
                            <div>
                                <FaBehance size={20} className=' text-gray-700 hover:text-[#089BFF]' />
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-[300px]'>
                        <div className='lg:w-[300px] flex flex-col gap-4 '>
                            <div><h3 className='text-[1.7em] text-white fira-sans-bold'>Official info:</h3></div>
                            <span className='w-8 border-t border-[#1475F7]'></span>
                            <div className="lg:w-full flex items-center">
                                <div className='lg:w-10 h-full'>
                                    <FaLocationDot size={15} color="white" />
                                </div>
                                <div className='lg:w-full border-red-500'>
                                    <p className='text-[14px] fira-sans-light'>0 Commercial Road<br />
                                        Fratton, Australia</p>
                                </div>
                            </div>
                            <div className="lg:w-full flex items-center">
                                <div className='lg:w-10 h-full'>
                                    <FaPhoneAlt size={15} color="white" />
                                </div>
                                <div className='lg:w-full border-red-500'>
                                    <p className='text-[14px] fira-sans-light'>0 Commercial Road<br />
                                        Fratton, Australia</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-[15px] text-white fira-sans-bold '>Open Hours</h3>
                                <p className='text-[14px] fira-sans-light'>Mon – Sat: 8 am – 5 pm,</p>
                                <p className='text-[14px] fira-sans-light'>Sunday: CLOSED</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[300px]'>
                        <div className='lg:w-[300px] flex flex-col gap-4'>
                            <div><h3 className='text-[1.7em] text-white fira-sans-bold'>Gallery</h3></div>
                            <span className='w-8 border-t border-[#1475F7]'></span>
                            <div className='h-52 gap-y-1 gap-x-2 grid grid-cols-3'>
                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery1.jpg" alt='grid-img' className='bg-cover' />
                                </div>
                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery2.jpg" alt='grid-img' className='bg-cover' />
                                </div>

                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery3.jpg" alt='grid-img' className='bg-cover' />
                                </div>
                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery4.jpg" alt='grid-img' className='bg-cover' />
                                </div>
                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery5.jpg" alt='grid-img' className='bg-cover' />
                                </div>
                                <div className=''>
                                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery6.jpg" alt='grid-img' className='bg-cover' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='border-t border-white h-2 w-full'></div>
            </div>
            <div className='w-full h-8 text-center p-4'>
                <p className='text-white text-[16px] fira-sans-regular'>© 2024 Itfirm – CaseThemes. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
