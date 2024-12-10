import React, { useState } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
const Solution = () => {
  return (
    <div className="mb-10 md:w-full xl:w-full xl:mb-32">
      <div className="w-full xl:max-w-7xl flex justify-start items-start mx-auto py-[60px]">
        <div className="px-[15px] xl:w-[798px] xl:h-[227px] mx-auto flex flex-col gap-6">
          <p className="text-center text-blue-800  text-[18px] poppins-regular font-[600]">
            Technology Solution
          </p>
          <p className="text-center text-black font-[700] text-[36px] poppins-bold">
            We provide IT & business solution
          </p>
          <p className="text-center text-gray-500 text-[16px] poppins-regular xl:text-center">
            orem Ipsum is simply dummy text of the printing and typesetting has
            been the industry’s standard dummy text.Lorem Ipsum is simply dummy
            text of the printing and typesetting
          </p>
        </div>
      </div>
      <div className="md:w-[100%] md:px-[10px] xl:max-w-7xl xl:mx-auto xl:px-[15px]">
        <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 justify-items-center xl:h-[400px]">
          <div className="solution-card gap-6 md:w-[100%] xl:w-[333px] flex flex-col xl:gap-20">
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] xl:ml-10" />
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] " />
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] xl:ml-10" />
          </div>
          <div className="xl:w-[500px]">
            <img
              src="https://softek.radiantthemes.com/wp-content/uploads/2022/11/Ban20-7.webp"
              alt="solution-img"
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="solution-card gap-6 md:w-[100%] xl:w-[333px] flex flex-col xl:gap-20">
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] xl:-ml-10" />
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1]" />
            <SolutionCard className="w-full px:[17px] h-[195px] md:w-[100%] md:h-[100px] md:px-0 xl:w-[333px] xl:h-[118px] box_shadow p-6 rounded-md hover:bg-[#103AB1] xl:-ml-10" />
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
      <div className="flex items-center justify-center flex-col md:flex-row md:justify-start md:items-center md:gap-4 md:px-4 xl:gap-5 xl:w-full xl:h-full xl:px-3 xl:items-start">
        <div
          className={`${
            hover ? "-translate-x-2" : ""
          } w-[60px] h-[60px] grid place-content-center bg-blue-500 transition-all transition-custom duration-300 xl:h-[50px]`}
        >
          <MdOutlineInsertChart size={18} color="blue" />
        </div>
        <div className="flex items-center flex-col md:items-start gap-2 text-black xl:h-auto xl:flex-col xl:items-start xl:gap-0">
          <h2 className="text-[18px] poppins-bold">Content Strategy</h2>
          <div className="text-center md:text-center xl:text-start">
            <p className="text-[15px] text-gray-400 poppins-regular">
              Morbi vitae tristique sem, ut dignissim libero
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solution;
