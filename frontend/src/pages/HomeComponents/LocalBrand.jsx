import React from "react";
import { motion } from "framer-motion";

const brands = [
  "/brand1.svg",
  "/brand2.svg",
  "/brand3.svg",
  "/brand4.svg",
  "/brand5.svg",
  "/brand6.svg",
  "/brand7.svg",
];

const LocalBrand = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-6">
      <h2 className="text-center text-2xl font-bold mb-4 py-8">
        Brands We Love
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt="brand logo"
              className="h-10 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LocalBrand;
