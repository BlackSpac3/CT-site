import { motion } from "framer-motion";
import { useState } from "react";

import { assets } from "../assets/assets";

const Navbar = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const linkStyles = `${
    navbarShadow ? "text-black" : "text-white"
  } cursor-pointer`;
  const shadowTrigger = () => {
    if (window.scrollY > 0) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };

  window.addEventListener("scroll", () => shadowTrigger());
  return (
    <div
      className={`${
        navbarShadow ? "bg-white shadow-md" : ""
      } fixed z-20 flex justify-between items-center w-[100%] px-[5vw] py-[20px]`}
    >
      <img
        src={navbarShadow ? assets.logo_black : assets.logo_white}
        alt="Cardinal Torch"
        className="w-[180px] cursor-pointer"
      />

      <div className="flex items-center gap-[40px]">
        <ul className="flex gap-[20px]">
          <li className={linkStyles}>Home</li>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <li className={linkStyles}>About</li>
            <img
              src={
                navbarShadow
                  ? assets.expand_icon_black
                  : assets.expand_icon_white
              }
              alt=""
              className="h-[12px]"
            />
          </div>
          <li className={linkStyles}>Products & Services</li>
          <li className={linkStyles}>Blogs</li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white px-[20px] py-[10px] rounded-[10px] cursor-pointer"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};
export default Navbar;
