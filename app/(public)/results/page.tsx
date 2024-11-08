
import React from 'react';

function page() {
  return (
    <main className="flex flex-col bg-white items-center justify-center mb-16 h-[500px] px-4">
      <div className="z-10 w-full max-w-2xl flex flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h1 className="text-sky-800 font-extrabold text-center mt-12 sm:mt-16 font-[poppins] text-2xl sm:text-3xl">
          Grand Entrance Exam Result
        </h1>
        <form className="flex flex-col justify-center items-center text-white mt-10 gap-3 w-full md:text-sm">
          <label
            htmlFor="registration-number"
            className="text-black font-[poppins] font-medium w-full sm:w-3/4 md:w-full"
          >
            Registration Number*
          </label>
          <input
            id="registration-number"
            type="text"
            placeholder="Registration Number"
            required
            className="bg-slate-100 border border-black mt-1 pl-3 font-medium font-[poppins] rounded-sm h-10 w-full sm:w-3/4 md:w-full text-slate-600 focus:border-sky-500"
          />
          <label
            htmlFor="cnic-bform-number"
            className="text-black font-[poppins] font-medium w-full sm:w-3/4 md:w-full"
          >
            CNIC or B-Form Number*
          </label>
          <input
            id="cnic-bform-number"
            type="text"
            placeholder="CNIC or B-Form Number"
            required
            className="bg-slate-100 border border-black mt-1 pl-3 font-medium font-[poppins] rounded-sm h-10 w-full sm:w-3/4 md:w-full text-slate-600 focus:border-sky-500"
          />
          <div className="flex justify-center items-center text-center mt-10 w-full">
            <button className="bg-sky-800 text-white font-extrabold h-12 sm:h-14 w-48 sm:w-52 font-[poppins]">
              GET RESULT
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default page;
