
import React from 'react';

function CourseInformation() {
  return (
    <div className='flex bg-white justify-center px-4  sm:px-8'>
      <div className='w-full max-w-screen-lg lg:mr-60 '>
        {/* Core Courses Section */}
        <div className='mt-16'>
          <h1 className='font-extrabold text-3xl sm:text-left font-[poppins] text-sky-800 text-center'>
            Core Courses Sequence
          </h1>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10'>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Programming Fundamentals"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Programming Fundamentals
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Web2 Using NextJS"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Web2 Using NextJS
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Earn as You Learn"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Earn as You Learn
              </h3>
            </div>
          </div>
        </div>

        {/* Advanced Courses Section */}
        <div className='mt-16'>
          <h1 className='font-extrabold text-3xl sm:text-left font-[poppins] text-sky-800 text-center'>
            Advanced Courses
          </h1>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10'>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Artificial Intelligence"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Artificial Intelligence
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Web 3 and Metaverse"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Web 3 and Metaverse
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Cloud-Native Computing"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Cloud-Native Computing
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Ambient Computing and IoT"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Ambient Computing and IoT
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Genomics and Bioinformatics"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Genomics and Bioinformatics
              </h3>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md flex flex-col justify-center items-center text-center p-4'>
              <img
                src="https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg"
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
                alt="Network Programmability and Automation"
              />
              <h3 className='pb-4 mt-4 text-lg font-bold text-zinc-600'>
                Network Programmability and Automation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInformation;
