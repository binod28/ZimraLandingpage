import { useState } from "react";

const Services = () => {
  const [translateY, settranslateY] = useState(false);

  return (
    <div className="lg:w-full lg:h-full bg-service-bg relative ">
      {/* Background Image */}
      <div
        className="absolute bg-[url('https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                 bg-cover bg-center top-0 left-0 z-20 w-full h-full"
      ></div>

      {/* Content on top */}
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full bg-blue-600 full-container-wrapper">
        <AnimatedCard
          title="Firewall Advance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt quas voluptas qui expedita saepe ratione praesentium soluta esse provident!"
        />
        <AnimatedCard
          title="Data Management"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt quas voluptas qui expedita saepe ratione praesentium soluta esse provident!"
        />
        <AnimatedCard
          title="BigData & Analytics"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt quas voluptas qui expedita saepe ratione praesentium soluta esse provident!"
        />

        <AnimatedCard
          title="Research & Energy"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt quas voluptas qui expedita saepe ratione praesentium soluta esse provident!"
        />
        <AnimatedCard
          title="Warrenty Management"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt quas voluptas qui expedita saepe ratione praesentium soluta esse provident!"
        />
      </div>
    </div>
  );
};

export default Services;
const AnimatedCard = ({ title, description }) => {
  return (
    <div className="border border-red-50 z-20 relative flex flex-col lg:h-[36rem] lg:z-30">
      {/* translate container */}
      <div className="h-full w-full bg-black opacity-80 lg:hover:bg-black hover:opacity-80">
        <div className="h-[30rem] w-full overflow-y-hidden">
          <div className="-translate-y-14 lg:translate-y-[13rem] px-4 flex flex-col items-start justify-end py-2 gap-6 h-full duration-500 transition-all ease-in-out lg:hover:translate-y-0 ">
            <h2 className="z-50 fira-sans-bold text-white text-[35px] font-[600] leading-none">
              {title}
            </h2>
            <p>{description}</p>
            <div className="w-full flex items-center">
              <div className="relative w-12 h-12 rounded-full flex justify-center items-center bg-blue-800 shadow-custom-light hover:w-32 transition-all ease-in-out duration-200">
                <p className="absolute left-4 text-white font-[800] fira-sans-regular whitespace-pre ">
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
