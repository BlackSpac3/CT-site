import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  let potrait_val = () => {
    if (window.innerHeight > window.innerWidth) {
      return true;
    } else {
      return false;
    }
  };
  const [isPotrait, setIsPotrait] = useState(potrait_val());

  const handleresize = () => {
    potrait_val() ? setIsPotrait(potrait_val()) : setIsPotrait(potrait_val());
  };

  window.addEventListener("resize", handleresize);

  return (
    <div
      id="hero"
      className={`relative bg-hero bg-cover bg-no-repeat h-[100vh] ${
        isPotrait ? "tab:h-[50vh]" : "tab:h-[100vh]"
      }`}
    >
      <div id="hero-contents" className="relative">
        <section className="pt-44 px-20 text-white ">
          <h2 className=" text-sm tracking-widest">Best Agro Company</h2>
          <h1 className="text-5xl tracking-wider leading-tight font-bold font-['Montserrat']">
            Redefining
            <span className="block font-['Montserrat']">
              Africa's Commodity{" "}
              <span className="block font-['Montserrat']">Supply Chain</span>
            </span>
          </h1>
          <p className="w-[48%] pt-4 text-sm">
            We are engaged in the business of commodities trade. Our primary
            products are Cocoa, Soya, Coffee & Cashew.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white px-[20px] py-[10px] mt-6 rounded-lg "
          >
            Contact Us
          </motion.button>
        </section>
      </div>
    </div>
  );
};
export default Hero;
