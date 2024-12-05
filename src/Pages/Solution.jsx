import React, { useState } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
const Solution = () => {
  return (
    <div className="lg:w-full lg:h-[130vh] ">
      <div className="lg:max-w-7xl flex justify-start items-start mx-auto py-[60px]">
        <div className="lg:w-[798px] lg:h-[227px] mx-auto flex flex-col gap-6">
          <p className="text-center text-blue-800  text-[18px] poppins-regular font-[600]">
            Technology Solution
          </p>
          <p className="text-center text-black font-[700] text-[36px] poppins-bold">
            We provide IT & business solution
          </p>
          <p className="text-center text-gray-500 text-[16px] poppins-regular">
            orem Ipsum is simply dummy text of the printing and typesetting has
            been the industry’s standard dummy text.Lorem Ipsum is simply dummy
            text of the printing and typesetting
          </p>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-3 justify-items-center lg:h-[400px]">
          <div className="solution-card lg:w-[333px] flex flex-col gap-20">
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] ml-10" />
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1]" />
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] ml-10" />
          </div>
          <div className="lg:w-[500px] ">
            <img
              src="https://softek.radiantthemes.com/wp-content/uploads/2022/11/Ban20-7.webp"
              alt="solution-img"
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="solution-card lg:w-[333px] flex flex-col gap-20">
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] lg:-ml-10" />
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1]" />
            <SolutionCard className="lg:w-[333px] lg:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] lg:-ml-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ className }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex gap-5 lg:w-full lg:h-full px-3">
        <div
          className={`${
            hover ? "-translate-x-4" : ""
          } w-[60px] h-[60px] grid place-content-center bg-blue-500 transition-all transition-custom duration-300`}
        >
          <MdOutlineInsertChart size={18} color="blue" />
        </div>
        <div className="lg:w- h-full flex flex-col gap-2 text-black ">
          <h2 className="text-[18px] poppins-bold ">Content Strategy</h2>
          <div>
            <p className="text-[15px] text-gray-400  poppins-regular">
              Morbi vitae tristique sem, ut dignissim libero
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solution;
