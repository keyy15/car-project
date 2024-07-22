import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import "../styles/Header/Rs_header_top.css";
import { BsCart3 } from "react-icons/bs";

const itemListTopHeader = [
  "Need Help?",
  "Theme FAQs",
  "Blog",
  "Gift Certificate",
  "Compare",
];

const Rs_header_top = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [headerTopHover, setHeaderTopHover] = useState(false);
  const [isHoverItems, setIsOverItems] = useState(false);
  const [hoverdOnSignIn, setHoverdOnSignIn] = useState(false);
  const [hoverdOnCreate, setHoverdOnCreate] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHeaderTopHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box className="w-full h-auto flex justify-center items-center border-b-[1px]">
      <Box className="w-4/5 h-auto flex justify-between items-center p-2">
        <ul className="inline-flex justify-center items-center gap-4">
          <motion.li
            className="flex justify-between items-center cursor-pointer relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setHeaderTopHover(!headerTopHover)}
          >
            <a className="text-[12px] font-bold">USD</a>
            <RiArrowDropDownLine className="text-2xl" />
            {isHovered && (
              <motion.div
                className="absolute bottom-0 left-0 bg-[black]"
                style={{ width: "100%", height: "2px" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
            <AnimatePresence>
              {headerTopHover && (
                <motion.ul
                  className="absolute top-4 bg-[#FAFAFA] w-40 border rounded-sm"
                  animate={{
                    y: "12px",
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                    transition: { duration: 0.2 },
                    delay: 0.2,
                  }}
                  transition={{
                    type: "fade",
                    stiffness: 800,
                  }}
                >
                  <li className="cursor-pointer">1</li>
                  <li className="cursor-pointer">1</li>
                  <li className="cursor-pointer">1</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
          <li className="cursor-pointer">
            <span className="text-[12px] font-sans">
              Free Shipping on all orders. No minimum purchases*
            </span>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-4">
          <li className="relative">
            <ul className="flex text-[12px] gap-5">
              {itemListTopHeader.map((item, index) => (
                <motion.li
                  key={index}
                  className="cursor-pointer relative"
                  whileHover={{
                    color: "#0055a6",
                  }}
                  onMouseEnter={() => setIsOverItems(index)}
                  onMouseLeave={() => setIsOverItems(null)}
                  onClick={() => alert(index)}
                >
                  <a>{item}</a>
                  {isHoverItems === index && (
                    <motion.div
                      key={index}
                      className="absolute bottom-0 left-0 bg-[#0055a6]"
                      style={{ width: "100%", height: "2px" }}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{
                        transition: {
                          duration: 0.3,
                          delay: 0.1,
                          easing: "easeOut",
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </li>
          <li>
            <ul className="flex text-[12px] gap-2">
              <motion.li
                className="cursor-pointer relative"
                whileHover={{
                  color: "#0055a6",
                }}
                onMouseEnter={() => setHoverdOnSignIn(true)}
                onMouseLeave={() => setHoverdOnSignIn(false)}
              >
                <a>Sign In</a>
                {hoverdOnSignIn && (
                  <motion.div
                    className="absolute bottom-0 left-0 bg-[#0055a6]"
                    style={{ width: "100%", height: "2px" }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{
                      transition: {
                        duration: 0.3,
                        delay: 0.1,
                        easing: "easeOut",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.li>
              <li>
                <a>or</a>
              </li>
              <motion.li
                className="cursor-pointer relative"
                whileHover={{
                  color: "#0055a6",
                }}
                onMouseEnter={() => setHoverdOnCreate(true)}
                onMouseLeave={() => setHoverdOnCreate(false)}
              >
                <a>Create An Account</a>
                {hoverdOnCreate && (
                  <motion.div
                    className="absolute bottom-0 left-0 bg-[#0055a6]"
                    style={{ width: "100%", height: "2px" }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{
                      transition: {
                        duration: 0.3,
                        delay: 0.1,
                        easing: "easeOut",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.li>
            </ul>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Rs_header_top;

export const Rs_header_middle = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 h-full p-2 py-4">
        <ul className="flex justify-between items-center gap-8">
          <li className="">
            <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/images/stencil/168x19/logo_1554953901__89734.original.png" />
          </li>
          <li className="flex justify-between items-center">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <p className="text-[#B20000] font-bold text-lg">
                  1.800.000.8809
                </p>
                <p className="text-[12px] text-center font-normal">
                  Open 7 days a week
                </p>
              </li>
              <li className="flex justify-center items-center border rounded shadow-[0_3px_5px_rgb(0,0,0,0.2)]">
                <div className="h-full w-full border-r p-3">
                  <select className="text-center focus:outline-none focus:border-none border-x-black">
                    <option selected className="w-full">
                      All
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="h-full w-full">
                  <input
                    type="input"
                    className="focus:outline-none px-4 text-sm w-[24rem] text-black"
                    placeholder="Search for product"
                    style={{ color: "black" }}
                  />
                </div>
                <div className="px-5 py-2 border-l bg-[#F7F7F7]">
                  <button>
                    <CiSearch className="text-2xl text-center font-bold" />
                  </button>
                </div>
              </li>
              <li className="p-4 text-sm border-r">
                <a>My Account</a>
              </li>
              <li className="flex justify-center items-center gap-4">
                <div>
                  <a>
                    <CiHeart className="text-4xl" />
                  </a>
                </div>
                <div className="relative">
                  <a>
                    <CiShoppingCart className="text-4xl" />
                  </a>
                  <span className="absolute top-0 -right-1 rounded-full px-[6px] py-[2px] text-xs text-white bg-[#b20000]">
                    0
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Rs_header_bottom = ({ setHoverPoper }) => {
  const [hoverHeaderBottom, setHoverHeaderBottom] = useState(null);

  const rs_bottom_list = [
    { name: "INTERIOR" },
    { name: "EXTERIOR" },
    { name: "PERFORMANCE" },
    { name: "INTERIOR LIGHTING" },
    { name: "WHEELS & TIRES" },
    { name: "REPAIR PARTS" },
    { name: "BODY PARTS" },
    { name: "TOOLS & GARAGE" },
    { name: "AUDIO & ELECTRONICS" },
    { name: "BUT THEME" },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#383E47]">
      <div className="w-4/5 py-3">
        <ul className="flex items-center justify-between gap-4">
          {rs_bottom_list.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer relative"
              onMouseEnter={() => {
                setHoverHeaderBottom(index);
                setHoverPoper(index);
              }}
              onMouseLeave={() => {
                setHoverHeaderBottom(null);
                setHoverPoper(null);
              }}
              onClick={() => alert(index)}
            >
              <a className="uppercase text-white font-bold text-sm tracking-[0px] ">
                {item.name}
              </a>
              {hoverHeaderBottom === index && (
                <motion.div
                  className="absolute bottom-0 left-0 bg-white"
                  style={{ width: "100%", height: "2px" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{
                    transition: {
                      duration: 0.2,
                      delay: 0.1,
                      easing: "easeOut",
                    },
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Popup_Bottom = ({ hoverPoper }) => {
  const [hoverSubTitle, setHoverSubTitle] = useState(null);

  const interior = [
    {
      title: "Accéssorius",
      imgUrl:
        "https://caros-demo.mybigcommerce.com/product_images/uploaded_images/megamenu-banner-1.png",
      subTitle: [
        "Comodianos",
        "Dincidunteros",
        "Gravidas",
        "Loremous",
        "Montemous",
      ],
    },
    {
      title: "Condimentum Purus",
      imgUrl:
        "https://caros-demo.mybigcommerce.com/product_images/uploaded_images/megamenu-banner-2.png",
      subTitle: [
        "Comodianos",
        "Dincidunteros",
        "Gravidas",
        "Loremous",
        "Montemous",
      ],
    },
    {
      title: "Cosmopolis",
      imgUrl:
        "https://caros-demo.mybigcommerce.com/product_images/uploaded_images/megamenu-banner-3.png",
      subTitle: [
        "Comodianos",
        "Dincidunteros",
        "Gravidas",
        "Loremous",
        "Montemous",
      ],
    },
    {
      title: "Milancelos Cosmo",
      imgUrl:
        "https://caros-demo.mybigcommerce.com/product_images/uploaded_images/megamenu-banner-4.png",
      subTitle: [
        "Comodianos",
        "Dincidunteros",
        "Gravidas",
        "Loremous",
        "Montemous",
      ],
    },
    {
      title: "Nor Loremirus",
      imgUrl:
        "https://caros-demo.mybigcommerce.com/product_images/uploaded_images/megamenu-banner-5.png",
      subTitle: [
        "Comodianos",
        "Dincidunteros",
        "Gravidas",
        "Loremous",
        "Montemous",
      ],
    },
  ];

  return (
    <AnimatePresence>
      {hoverPoper !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`w-full absolute`}
        >
          <div className="w-full h-full flex justify-center items-center bg-white ">
            <ul className="w-4/5 h-auto flex justify-between items-center">
              {interior?.map((item, index) => (
                <li key={index}>
                  <p className="text-[#007bff] py-4 cursor-pointer">
                    {item.title}
                  </p>
                  <motion.img
                    src={item.imgUrl}
                    alt=""
                    className="w-full h-full object-cover cursor-pointer"
                  />
                  <span className="h-full flex flex-col gap-2 items-start text-[12px] py-4 text-[#383e47]">
                    {item.subTitle.map((item, index) => (
                      <a
                        className={`opacity-80 ${
                          hoverSubTitle === index
                            ? "text-[#007bff] cursor-pointer"
                            : ""
                        }`}
                        onMouseEnter={() => setHoverSubTitle(index)}
                        onMouseLeave={() => setHoverSubTitle(null)}
                      >
                        {item}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
