
import React from "react";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    
      <div className="relative z-0 bg-[url('https://www.governorsindh.com/bg_house.jpg')] bg-cover bg-center bg-opacity-75 overflow-hidden w-full h-[1200px] md:h-[800px] m-auto flex md:flex-row flex-col  sm:flex-col justify-between px-6 sm:px-12 md:px-0 py-8">
        <div className="absolute inset-0 -z-0 bg-zinc-100 bg-opacity-80 w-full h-full"></div>
        <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between xl:w-[1300px] md:ml-6 lg:ml-20 lg:w-[90%]">
          <div className="h-fit w-full pt-5 md:py-10 ">
            <h1 className="text-sky-900 whitespace-nowrap leading-10 tracking-wider font-extrabold font-[poppins] space-x-4 lg:text-6xl sm:text-5xl  sm:leading-none text-[2rem] md:text-left mb-0 md:mt-32 mt-5 text-center">
              Governor Sindh
            </h1>
            <h3 className="text-sky-900 whitespace-nowrap text-center text-[1.5rem] leading-[2rem] lg:text-[2.5rem] md:text-left sm:text-4xl sm:leading-[3rem] tracking-wider font-[poppins] font-normal">
              Kamran Khan Tessori
            </h3>
            <h1 className="text-sky-400 whitespace-nowrap text-center text-[1.5rem] space-x-9 sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] mt-4 tracking-wider font-semibold leading-[2rem] ">
              Certified Cloud
              <br />
              Applied Generative AI
              <br />
              Engineer (GenEng)
            </h1>
            <p className="text-sky-900 whitespace-nowrap my-5 text-center md:text-left font-extrabold font-[poppins] text-[1.25rem] sm:text-2xl">
              Earn up to $5,000 / month
            </p>
            <p className="text-sky-900 my-5 text-center font-bold whitespace-nowrap tracking-wider font-[poppins] md:text-left md:w-[80%] w-full text-[1.25rem] sm:text-2xl">
              Now admissions are open in <br />
              Hyderabad
            </p>

          <div className="mb-7 mt-10 flex flex-col items-center sm:flex-row mr-[30px] md:mr-[5px] w-full md:w-[500px]  sm:gap-5 md:mb-0 space-x-6">
            <button className="bg-sky-900 w-full rounded-md text-white px-8 py-4 font-semibold tracking-wider font-[poppins] text-sm text-center transition-all  hover:translate-y-1 hover:bg-sky-700 h-16  sm:text-base md:w-58">
              APPLY NOW
            </button>
            <div className="text-sky-900 mt-4 flex w-full flex-col items-center sm:mt-0">
              <div className="flex-col text-center text-xl tracking-widest text-sky-900 sm:text-3xl">
                <h1 className="font-extrabold w-40">562,143</h1>
              </div>
              <div className="sm:text-sm sm:mb-0 text-center text-xs tracking-wider font-light font-[poppins]">
                Accepted Applications
              </div>
            </div>
          </div>
          </div>
        </div>
        

        <HeroImage/>
        
      </div>
    
  );
}

export default HeroSection;
