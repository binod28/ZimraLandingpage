import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    return (
        <header>
            <div className='py-2 w-full bg-red-500 bg-navbar-bg'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <div className='flex lg:items-center lg:gap-2'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[#0BCFD6] text-[15px] font-bold uppercase'>50% off on</p>
                            <p className='text-[#FB03A8] font-bold text-[15px] uppercase'>annual plans!</p>
                            <p className='underline font-bold text-[15px] text-[white] uppercase'>Cyber sales Ends in</p>

                        </div>
                        <div className='h-6 w-6 rounded-[5px] bg-white font-bold text-[14px] grid place-content-center text-black'>03</div>
                        <div className='h-6 w-6 rounded-[5px] bg-white font-bold text-[14px] grid place-content-center text-black'>10</div>
                        <div className='h-6 w-6 rounded-[5px] bg-white font-bold text-[14px] grid place-content-center text-black'>30</div>
                        <div className='text-black h-6 w-6 rounded-[5px] bg-white font-bold text-[14px] grid place-content-center'>5</div>

                    </div>
                    <div className='flex lg:flex items-center gap-3'>
                        <div className='flex items-center px-4 py-2 text-white lg:text-[14px] gap-2 justify-center'><p>Become a Partner</p>
                            <IoIosArrowDown size={15} color='white' />
                        </div>
                        <div className='bg-[#FFFFFF] px-2 py-[5px] rounded-[4px] flex items-center gap-2 '>
                            <CiCalendar size={18} color='black' />
                            <p className='font-normal text-[12px] text-black'>Book a demo</p>
                        </div>
                        <div className='bg-[#FFFFFF] px-2.5 py-[5px] rounded-[4px] flex items-center gap-2 '>
                            <CiLogin size={18} color='black' />
                            <p className='font-normal text-[12px] text-black'>Login</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-full shadow'>
                <div className='max-w-7xl mx-auto lg:py-4 flex items-center justify-between'>
                    <div className='lg:w-[140px] h-14 '>
                        <img src={'/assets/logo/Zimra.jpg'} alt='logo' className='h-11 w-[100px] rounded-lg' />
                    </div>
                    <ul className='flex gap-8 items-center text-black text-[1em]'>
                        <li className='flex gap-2 items-center'>
                            <a href="">100+CRM Integration</a>
                            <span><IoIosArrowDown size={14} color='black' /></span>
                        </li>
                        <li className='flex gap-2 items-center'><a>AI Products</a>
                            <span><IoIosArrowDown /></span>
                        </li>
                        <li className='flex gap-2 items-center'><a>Solution</a>
                            <span><IoIosArrowDown /></span>
                        </li>
                        <li>Pricing</li>
                        <li className='flex gap-2 items-center'><a>Free Tool</a>
                            <span><IoIosArrowDown /></span>
                        </li>
                        <li className='flex gap-2 items-center'><a>Resource</a>
                            <span><IoIosArrowDown /></span>
                        </li>

                    </ul>
                    <div className='grid place-content-center text-white bg-[#002653] rounded-lg w-36 h-11 font-[500] text-[17px]'>Get started</div>
                </div>
            </div>
        </header >

    )
}

export default Navbar
