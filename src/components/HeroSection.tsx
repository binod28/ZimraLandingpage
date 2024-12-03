import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import useTypeWriter from '../hooks/useTypeWriter';
const data = [
    "https://krispcall.com/wp-content/uploads/2023/11/Pipedrive.png", "https://krispcall.com/wp-content/uploads/2023/10/hubspot-favicon.svg", "https://krispcall.com/wp-content/uploads/2024/03/intercom-logo.png", "https://krispcall.com/wp-content/uploads/2023/12/zapier-black-92x92-1.png", "https://krispcall.com/wp-content/uploads/2024/03/Nimble-logo.png", "https://krispcall.com/wp-content/uploads/2023/11/Salesforce.png", "https://krispcall.com/wp-content/uploads/2024/02/crisp-integration-logo.png", "https://krispcall.com/wp-content/uploads/2023/11/zendesk-logo.png", "https://krispcall.com/wp-content/uploads/2024/02/Keap-Integration-logo.png"
]
const HeroSection = () => {
    const heroText = 'Customer Experience Platform';
    const speed = 50;
    const displayText = useTypeWriter({ text: heroText, speed: 60 });
    return (
        <div className='lg:w-full shadow'>
            <div className='max-w-6xl mx-auto lg:h-60'>
                <h1 className='text-[2em] text-center lg:mt-24'>
                    <span className='text-[#002653] text-[1.5em] font-[600]'>AI powered </span>
                    <span className='text-[1.5em] font-[600] text-black'>modern phone app for your</span>
                    <br />
                    <span className='text-[1.5em] font-[600] text-[#002653] text-center'>{displayText}
                        <span className='blinking-cursor bg-orange-500 inline-block h-10 w-1'></span>

                    </span>

                </h1>
                <div className='lg:w-full'>
                    <p className='max-w-[627px] mx-auto text-[16px] text-[#4d4950] text-center font-medium lg:mt-3'>Bring advanced telephony capabilities inside your CRM platforms with KrispCall</p>
                </div>
                <div className='w-full py-8'>
                    <div className='max-w-6xl mx-auto flex justify-center gap-4'>
                        <div className='border border-[#d1d4dc] h-11 w-[12rem] rounded-md flex items-center justify-center gap-3'>
                            <IoCalendarOutline size={18} color='black' />
                            <p className='text-[black] text-[1em] font-[700]'>Book a demo</p>
                        </div>
                        <div className='grid place-content-center text-white bg-[#002653] rounded-lg w-48 h-11 font-[500] text-[17px]'>Get started</div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-center gap-4 px-2'>
                        {

                            data.map((item) => (
                                <div className='h-[35px] w-[35px] rounded'>
                                    <img src={item} alt='company-logo' className='bg-cover h-full w-full rounded' />
                                </div>
                            )
                            )
                        }
                        <div> <p className='text-[16px] text-[#4d4950] font-[500]'><span className='font-bold'>100+ CRM integrations</span> for streamlined collaboration now on KrispCall</p></div>
                    </div>

                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-28'>
                <img src="https://krispcall.com/wp-content/uploads/2024/08/home-page-KrispCall-AI-powered-modern-phone-app-for-your-team-scaled.webp" alt='screenshots' className='w-[1240px] h-full object-cover' />
            </div>

        </div >
    )
}

export default HeroSection
