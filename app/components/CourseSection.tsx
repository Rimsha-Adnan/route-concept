import React from "react";

function CourseSection() {
  return (
    <div className="bg-white w-full flex justify-center text-center items-center ">
      <div className="  sm:mt-20 m-auto mt-10 border-b text-center border-zinc-300 pb-10  xl:w-[1300px] lg:w-90% ">
        <h1 className="text-sky-900 text-center xl:text-[36px] font-extrabold text-xl sm:text-[32px] sm:leadind-[2.5rem] leading-[1.75rem] m-auto md:w-[95%]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="justify-center sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem]  text-[1rem] text-zinc-800 sm:tracking-wider">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
        <div className="grid sm:grid-cols-3  grid-cols-1 gap-5 sm:m-0 m-3  mt-10">
          <div className="">
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg"
              className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
              alt="Course Image 1"
              height="896"
              width="1088"
            />
          </div>
          <div className="">
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg"
              className="shadow-2xl shadow-black rounded-lg h-[300px]  w-full"
              alt="Course Image 2"
              height="375"
              width="500"
            />
          </div>
          <div className="">
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
              alt="Course Image 3"
              height="896"
              width="1088"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
