import React, { useState } from "react";
import { motion } from "framer-motion";
import { TfiReload } from "react-icons/tfi";
import "../styles/Button/Button.css";

const Button_style = () => {
  return <div>123</div>;
};

export const UnderlineButton = ({ name }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "12px 15px 11px",
      }}
      className="bg-[#b20000] border-[#b20000] text-[#fff] min-w-[175px] text-sm rounded font-bold cursor-pointer hover:bg-transparent shadow-custom hover:text-[#b20000] hover:border bg:border-customRed"
    >
      {name}
    </motion.button>
  );
};

export default Button_style;

export const BrownButton = () => {
  return (
    <button className="h-full bg-red-600 text-[#fff] text-sm font-bold py-2 px-8 rounded hover:bg-white hover:text-[#dc3545] hover:border">
      BROWSE
    </button>
  );
};

export const ReloadButton = () => {
  return (
    <button className="h-full bg-red-600 text-[#fff] text-sm font-extrabold py-2 px-6 rounded hover:bg-white hover:text-[#dc3545] hover:border">
      <TfiReload />
    </button>
  );
};
