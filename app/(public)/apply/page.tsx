
import React from 'react';

function page() {
  return (
    <main className="flex flex-col items-center justify-center mb-20 h-auto min-h-[700px]">
      <div className="z-10 mx-4 my-10 w-full max-w-lg lg:max-w-2xl flex flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl sm:px-8 md:p-16">
        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl tracking-widest text-sky-800 font-medium font-[poppins]">
          Before continuing to the application process, subscribe on these social media platforms
        </h2>
        
        <div className="flex justify-center items-center text-white mt-5 gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhtnyrLl1djITLJP8l95AbM0u-qcVTI8oug&s"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        
        <div className="group w-full flex flex-col items-center">
          <button className="font-semibold text-lg sm:text-xl w-full max-w-xs py-3 sm:py-4 text-center tracking-widest text-white bg-sky-800 rounded-md hover:bg-sky-700 transition">
            CONTINUE
          </button>
          <p className="text-center mt-5">
            Already applied? <a href="#" className="text-blue-400 underline">Get Admit Card</a>
          </p>
        </div>
      </div>
      
      {/* Social Media Step Indicator */}
      <div className="w-[90%] lg:w-[800px] mx-auto mt-6 flex flex-wrap justify-center gap-5">
        {[
          { step: "1", platform: "Facebook" },
          { step: "2", platform: "Youtube" },
          { step: "3", platform: "Twitter" },
          { step: "4", platform: "Instagram" },
          { step: "5", platform: "Apply" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-[30px] w-[30px] rounded-full border-2 border-sky-800 flex items-center justify-center">
              <div className="text-sky-800 font-medium">{item.step}</div>
            </div>
            <span className="text-sky-800 text-sm sm:text-base">{item.platform}</span>
            {index < 4 && (
              <div className="h-0.5 w-10 sm:w-14 bg-slate-200 rounded "></div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default page;
