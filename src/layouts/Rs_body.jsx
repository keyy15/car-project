import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { BrownButton, ReloadButton, UnderlineButton } from "../components/Button_style";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Dropdown from "../components/Dropdown";

const slider = [
  {
    title: "Custom Wheels+Rims",
    p: "Pellentesque meget milancelos de tinciduntos loremous an cosmopolis",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-35csgqmz9s/images/stencil/original/carousel/3/slide1.jpg?c=2",
  },
  {
    title: "Off-road Truck",
    p: "Pellentesque meget milancelos de tinciduntos loremous an cosmopolis",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-35csgqmz9s/images/stencil/original/carousel/4/slide2.jpg?c=2",
  },
  {
    title: "Custom Wide Body Kits",
    p: "Pellentesque meget milancelos de tinciduntos loremous an cosmopolis",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-35csgqmz9s/images/stencil/original/carousel/5/slide3.jpg?c=2",
  },
];

const Rs_body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const categories = ["1", "2", "3", "4", "5"];

  return (
    <section className="w-full h-[480px] flex items-center justify-center bg-slate-400 relative overflow-hidden group">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slider.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex items-center justify-center relative"
          >
            <motion.img
              src={item.imageUrl}
              className="w-full h-full object-cover"
              alt={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: index * 0.5,
              }}
            />
            {currentIndex === index && (
              <Box
                component={motion.ul}
                className="h-full text-center flex flex-col items-center justify-center text-white gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]"
              >
                <Box
                  component={motion.li}
                  initial={{ opacity: 0, x: "-100%", y: "-0%" }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    y: "0%",
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1 className="font-bold text-5xl">{item.title}</h1>
                </Box>
                <Box
                  component={motion.li}
                  initial={{ opacity: 0, x: "-100%", y: "-0%" }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    y: "0%",
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-[12px] font-bold">{item.p}</p>
                </Box>
                <Box
                  component={motion.li}
                  className="h-[0.1px]"
                  initial={{ opacity: 0, x: "-100%", y: "-0%" }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    y: "0%",
                  }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <UnderlineButton
                    name="SHOP NOW"
                    className="hover:text-red-500"
                  />
                </Box>
              </Box>
            )}
          </motion.div>
        ))}
      </div>
      <div
        className={`w-full absolute top-1/2 transform -translate-y-1/2 flex justify-between items-center text-white px-20 opacity-0 group-hover:opacity-20 transition-opacity hover:shadow-custom duration-300`}
      >
        <FaRegArrowAltCircleLeft
          className="FaRegArrowAltCircleLeft cursor-pointer text-6xl hover:opacity-100"
          onClick={prevSlide}
        />
        <Box
          component={FaRegArrowAltCircleRight}
          className="FaRegArrowAltCircleRight cursor-pointer text-6xl hover:opacity-100"
          onClick={nextSlide}
        />
      </div>
      <div className="w-full absolute flex justify-center items-center bottom-5 gap-2 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
        {slider.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-transparent border" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      <div className="w-full h-12 absolute bottom-[20%] flex items-center justify-center gap-6">
        <span
          className="text-white text-[16px] font-bold"
          style={{ lineHeight: "1.5" }}
        >
          SELECT YOUR VEHICLE
        </span>
        <Dropdown title={"Selected Level 1"} category={categories} />
        <Dropdown title={"Selected Level 2"} category={categories} />
        <Dropdown title={"Selected Level 3"} category={categories} />
        <BrownButton />
        <ReloadButton />
      </div>
    </section>
  );
};

export default Rs_body;
