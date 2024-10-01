import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-28 pb-0 relative mt-5 bottom-0 text-white w-full grid grid-cols-3 gap-5">
      <div className="col-start-1 col-span-2">
        <span className="text-white myfont text-4xl font-bold px-40 my-10">
          Pass<span className="text-green-800">OP</span>
        </span>
        <p className="text-white px-40 mt-3 text-xl">
          Your own password manager
        </p>
        <span className="px-40 relative">
          <a href="https://www.instagram.com/tulsyanslok/" target="_blank">
            <i class="fab fa-instagram text-white text-4xl mt-5 mr-[1.5%] hover:cursor-pointer hover:text-blue-900"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/slok-tulsyan-003786293/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in text-white text-4xl mt-5 mx-[1.5%] hover:cursor-pointer hover:text-blue-900"></i>
          </a>

          <a href="https://x.com/slok_tulsyan" target="_blank">
            <i class="fab fa-twitter text-white text-[1.8rem] mt-5 mx-[1.5%] hover:cursor-pointer hover:text-blue-900"></i>
          </a>
        </span>
        <p className="text-white myfont text-xl font-thin px-40 my-10">
          M a d e &nbsp;&nbsp; w i t h &nbsp; ❤️
        </p>
      </div>
      <div>
        <div className="font-bold text-white text-2xl mb-8">Contact Us</div>
        <div className="flex gap-4">
          <i class="fas fa-map-marker-alt text-white text-xl mb-4"></i>
          <p className="text-white font-thin text-md">Durg, Chhattisgarh</p>
        </div>
        <div className="flex gap-3">
          <i class="fas fa-envelope text-white text-xl mb-4"></i>
          <p className="text-white font-thin text-md">sloktulsyan@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <i class="fas fa-phone text-white text-xl mb-4"></i>
          <p className="text-white font-thin text-md">9931085103</p>
        </div>
      </div>
      <div className="col-start-1 col-span-3 px-40 font-thin">
        © &nbsp; Slok Tulsyan, Student of IIT Bhilai
      </div>
    </div>
  );
};

export default Footer;
