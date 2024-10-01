import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black text-white text-xl px-2 pt-1">
      <span className="text-white myfont text-4xl font-bold mx-8 py-5">
        Pass<span className="text-green-800">OP</span>
      </span>
      <ul className="flex gap-16 mx-8 pt-8">
        <li className="cursor-pointer hover:font-semibold text-xl transition-all">
          Home
        </li>
        <li className="cursor-pointer hover:font-semibold text-xl transition-all">
          Contact
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
