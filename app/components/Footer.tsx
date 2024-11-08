
import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col bg-zinc-200 md:flex-row text-black justify-center w-full min-h-96 mt-10 p-8 md:p-12 print:hidden">
      <div className="flex flex-col bg-zinc-200 text-left mb-8 md:mb-0 md:ml-[80px]  text-zinc-800">
        <h1 className="font-bold font-[poppins] text-xl">Core Courses</h1>
        <ul className="space-y-3 mt-5">
          <li>Programming Fundamentals</li>
          <li>Web2 Using NextJS</li>
          <li>Earn as You Learn</li>
        </ul>
      </div>
      <div className="flex flex-col text-left mb-8 md:mb-0 md:ml-[80px] md:pl-10">
        <h1 className="font-bold font-[poppins] text-xl">Advanced Courses</h1>
        <ul className="space-y-3 mt-5">
          <li>Web 3 and Metaverse</li>
          <li>Cloud-Native Computing</li>
          <li>Artificial Intelligence (AI) and Deep Learning</li>
          <li>Ambient Computing and IoT</li>
          <li>Genomics and Bioinformatics</li>
          <li>Network Programmability and Automation</li>
        </ul>
      </div>
      <div className="flex flex-col text-left md:ml-[60px]">
        <h1 className="font-bold font-[poppins] text-xl">Social Links</h1>
        <div className="flex mt-5 space-x-3">
          <img src="https://freepnglogo.com/images/all_img/facebook-logo.png" className="h-8 w-8" alt="Facebook" />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" className="h-8 w-8" alt="YouTube" />
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" className="h-8 w-8" alt="Twitter" />
          <img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728864000&semt=ais_hybrid-rr-similar" className="h-8 w-8" alt="Instagram" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHauxSqQaXUnQ7byEiw7b2zv7_3LboDTCEg&s" className="h-8 w-8" alt="LinkedIn" />
        </div>
        <div className="flex items-center mt-4">
          <i className="fa-regular fa-envelope text-sky-800 p-1"></i>
          <p className="underline text-sky-800 ml-2 font-medium">education@governorsindh.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
