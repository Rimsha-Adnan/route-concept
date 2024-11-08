
"use client";
import { useState } from 'react';

const images = [
  "https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow2.ce4d5430.jpg" ,
  "https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg" ,
  "https://www.governorsindh.com/_next/static/media/slideShow4.d9ba1e2d.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow7.9e3fcc75.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow8.4b79537a.jpg" ,
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative  bg-white w-full overflow-hidden m-auto ">
      <div
        className="flex transition-transform duration-500   bg-whiteease-in-out"
        style={{  transform: `translateX(-${currentSlide * 50}%)`, width: `${images.length * 30}%` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-1/2   flex-shrink-0 p-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className=" w-full md:h-[600px] h-[300px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute  left-0 right-0 flex justify-center space-x-2">
        
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mt-6 transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
     <div className="absolute top-1/2 left-2 transform lg:ml-20 -translate-y-1/2 p-2 cursor-pointer">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="text-white bg-black p-2 rounded-full opacity-70 hover:opacity-100 transition"
         >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 cursor-pointer">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="text-white bg-black p-2 rounded-full opacity-70 hover:opacity-100 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
