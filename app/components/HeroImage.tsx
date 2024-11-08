import React from 'react'

function HeroImage() {
  return (
    <div className=" z-50 h-[100vh]  md:relative flex md:m-auto mt-20 md:mt-32 w-full items-end justify-center md:justify-end ">
        <img
          src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png"
          alt="Governor Sindh Program"
          className="min-w-[900px] lg:w-[600px] w-60 md:w-[70%] ml-3  xl:ml-44 lg:ml-0   h-auto md:mt-24 object-contain"
           height="1212"
         width="1600"
        />
    </div>
  )
}

export default HeroImage;
