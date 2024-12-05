import React from "react";
import { FaLink } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative lg:w-full h-full">
      <div className="relative lg:ml-[30%] -mt-10 lg:w-[70%] bg-white h-48 rounded-tl-full rounded-bl-full shadow-xl">
        <div>
          <div className="absolute top-[35%] -left-7 lg:w-16 lg:h-16 rounded-full shadow-custom-light bg-[#07ABF3] grid place-content-center">
            <FaLink size={34} color="white" />
          </div>
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-[385px] h-[135px] flex items-center gap-x-6 justify-center  border-r">
            <div className="w-[68px] h-full rounded-md py-3">
              <div className="h-[65px] w-[65px]">
                <img src="/assets/logo/customerservice.png" />
              </div>
            </div>
            <div className="h-full flex flex-col gap-3 w-[60%] items-start ">
              <h3 className="text-black text-[25px] font-[800]">
                Support Inquiries
              </h3>
              <p className="text-[16px] text-gray-600 font-[600]">
                Using any of our products and need help?
              </p>
              <span className="text-[16px] font-[800] text-black flex items-center">
                <p>Get Support</p>
                <IoIosArrowRoundForward size={20} color="black" />
              </span>
            </div>
          </div>

          <div className="w-[385px] h-[135px] flex items-center gap-x-6 justify-center">
            <div className="w-[68px] h-full rounded-md py-3">
              <div className="h-[65px] w-[65px]">
                <img src="/assets/logo/support.png" />
              </div>
            </div>

            <div className="h-full flex flex-col gap-3 w-[60%] items-start ">
              <h3 className="text-black text-[25px] font-[800]">
                Partner Inquiries:
              </h3>
              <p className="text-[16px] text-gray-600 font-[600]">
                Looking for our partners? Browse our partner directory.
              </p>
              <span className="text-[16px] font-[800] text-black flex items-center">
                <p>Find a Partner</p>
                <IoIosArrowRoundForward size={20} color="black" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 py-32">
        <div className="bg-white lg:w-full px-20 ">
          <div className=" flex flex-col items-start gap-2">
            <h2 className="font-[700] text-[#002653] text-[22px]">
              About your company
            </h2>
          </div>
          <div className="leading-[3.5em] lg:mt-5 border">
            <strong className="text-[60px] text-black fira-sans-bold">
              Choose
            </strong>
            <span className="pl-2 text-black text-[50px] fira-sans-regular">
              The best IT Service
            </span>
            <strong className="text-[60px] text-black fira-sans-bold pl-2">
              Company
            </strong>
          </div>
          <div className="w-full border-l-2 border-l-[#1061DF] p-4">
            <p className="roboto-regular text-[16px] text-gray-400">
              An IT firm or MSP who keeps your IT running smoothly at all times
              is like a plumber who fixes your pipes; that’s what they are
              supposed to do. Many IT firms struggle.
            </p>
          </div>
          <div className="flex justify-center lg:h-32 border-t border-b lg:mt-7">
            <div className="w-[257px] flex items-center gap-4">
              <div className="h-[65px] w-[65px]">
                <img src="/assets/logo/support.png" />
              </div>
              <p className="text-black text-[18px] fira-sans-bold font-[800]">
                MoneyBack <br />
                Gurentee
              </p>
            </div>
            <div className="w-[257px] flex items-center gap-4">
              <div className="h-[65px] w-[65px]">
                <img
                  src={"/assets/logo/customerservice.png"}
                  alt="logo"
                  className="h-full w-full"
                />
              </div>
              <p className="text-black text-[18px] fira-sans-bold font-[800]">
                MoneyBack <br />
                Gurentee
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:h-32 border-t border-b lg:mt-7">
            <div className="w-full flex items-center justify-between">
              <div className="w-40 rounded-full shadow-custom-light h-14 flex items-center gap-3 justify-center bg-[#06ACF3]">
                <p>contact us</p>
                <IoIosArrowRoundForward size={22} color="white" />
              </div>

              <div className="flex gap-4 items-center px-4">
                <div className="h-14 w-14 rounded-full border grid place-content-center">
                  <FaPhoneAlt size={18} color="#002653" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-[15px] ">Call for help</p>
                  <strong className="text-[24px] font-bold fira-sans-bold text-black">
                    91 124 3467 2345
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-full flex justify-end pr-5">
          <div className="lg:w-[581px] h-[807px]">
            <img
              src="https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h8-banner1.png"
              alt="hero-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
