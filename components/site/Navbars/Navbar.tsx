
import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

import { motion } from "framer-motion";
import useMediaQuery from "../UseMediaQuery";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";


type Props = {
  contacts: Contact[];
};

const Navbar = ({ contacts }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

  const [MenuIsToggle, setMenuIstoggle] = useState(false);
  const [DropDownIsToggle, setDropDownIsToggle] = useState(false);

  const [DropDownIsToggleP, setDropDownIsToggleP] = useState(false);


  return (
    <>
      <nav className="bg-deep-black text-light-white">
        <div className=" pt-6 px-5">
          {/* DESKTOP NAV */}
          {!isAboveSmallScreens ? (
            // Mobile  Nav
            <div className="pb-6  ">
              <div className="flex justify-between items-center   ">
                <Link
                  href={"/"}
                  className="block text-2xl font-semibold font-Antonio "
                >
                  {contacts.map( contact => (
                    <h1 key={contact._id}>{contact.logo}</h1>
                  ))}
                </Link>

                <div className="flex justify-center items-center">
                  {!MenuIsToggle ? (
                    // Open Menu
                    <div className="">
                      <button
                        className="outline-none "
                        onClick={() => setMenuIstoggle(!MenuIsToggle)}
                      >
                        <HiMenu className=" text-2xl " />
                      </button>
                    </div>
                  ) : (
                    // Close Menu
                    <div className=" ">
                      <motion.button
                        className="outline-none "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { opacity: 0, y: 0 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        onClick={() => setMenuIstoggle(!MenuIsToggle)}
                      >
                        <HiX className="text-2xl" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="lg:border-t lg:pt-2">
                <ul className="flex justify-between items-start  ">
                  <li className="  p-1 group transition-all duration-500">
                    <Link
                      href={"/about"}
                      className="font-extrabold  text-xl font-Antonio block"
                    >
                      <div className="relative uppercase overflow-y-hidden link-swipe">
                        <span className="block   transform transition-transform translate-y-0 duration-300">
                          About
                        </span>
                        <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                          About
                        </span>
                      </div>
                    </Link>
                    <div className="relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                      <ul className="space-y-1  absolute flex flex-col flex-grow top-0 left-0  py-5 px-5 bg-deep-overlay-black ">
                        <li className="">
                          <Link
                            href={"/blog"}
                            className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                          >
                            <div className="">
                              <span className="block text-lg ">Blog</span>
                            </div>
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href={"#"}
                            className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                          >
                            <div className="">
                              <span className="block text-lg ">Resume</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="  p-1 group transition-all duration-500">
                    <Link
                      href={"#"}
                      className="font-extrabold  text-xl font-Antonio block"
                    >
                      <div className="relative uppercase overflow-y-hidden link-swipe">
                        <span className="block   transform transition-transform translate-y-0 duration-300">
                          Porfolio
                        </span>
                        <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                          Porfolio
                        </span>
                      </div>
                    </Link>
                    <div className="relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                      <ul className="space-y-1  absolute flex flex-col flex-grow top-0 left-0  py-5 px-5 bg-deep-overlay-black ">
                        <li className="">
                          <Link
                            href={"/portfolio"}
                            className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                          >
                            <div className="">
                              <span className="block text-lg ">
                                Social Media & Strategy
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href={"/content-writing"}
                            className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                          >
                            <div className="">
                              <span className="block text-lg ">
                                Content Writing
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="  p-1 group transition-all duration-500">
                    <Link
                      href={"/contact"}
                      className="font-extrabold  text-xl font-Antonio block"
                    >
                      <div className="relative uppercase overflow-y-hidden link-swipe">
                        <span className="block   transform transition-transform translate-y-0 duration-300">
                          Contact
                        </span>
                        <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                          Contact
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* MOBILE NAV */}
          {!isAboveSmallScreens && MenuIsToggle && (
            <motion.div
              className="  relative "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ul className="flex flex-col text-deep-black justify-between items-start absolute top-3 bg-white left-0 w-full p-5 z-10 space-y-3.5">
                <li className="w-full ">
                  <div className="flex justify-between  items-center">
                    <Link
                      href={"/about"}
                      className="font-bold font-Antonio  w-1/2 block"
                    >
                      <div className=" ">
                        <span className=" transform transition-transform translate-y-0 duration-300">
                          About
                        </span>
                      </div>
                    </Link>

                    <div className="  ">
                      {!DropDownIsToggle ? (
                        // Open Menu
                        <button
                          className="outline-none pl-5  py-[2px] "
                          onClick={() => setDropDownIsToggle(!DropDownIsToggle)}
                        >
                          <BiChevronRight className="w-6 h-6 " />
                        </button>
                      ) : (
                        // Close Menu
                        <button
                          className="outline-none  pl-5  py-[2px]"
                          onClick={() => setDropDownIsToggle(!DropDownIsToggle)}
                        >
                          <BiChevronDown className="w-6 h-6 " />
                        </button>
                      )}
                    </div>
                  </div>

                  {DropDownIsToggle && (
                    <motion.div
                      className="   py-2.5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <ul className={`space-y-1py-5 px-5`}>
                        <li className="">
                          <Link
                            href={"/blog"}
                            className=" whitespace-nowrap  w-2/3 block "
                          >
                            <div className="">
                              <span className="block text-lg ">Blog</span>
                            </div>
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href={"#"}
                            className=" whitespace-nowrap   w-2/3 block "
                          >
                            <div className="">
                              <span className="block text-lg ">Resume</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>

                <li className="w-full ">
                  <div className="flex justify-between  items-center">
                    <Link
                      href={"#"}
                      className="font-bold font-Antonio  w-1/2 block"
                    >
                      <div className=" ">
                        <span className=" transform transition-transform translate-y-0 duration-300">
                          Portfolio
                        </span>
                      </div>
                    </Link>

                    <div className="  ">
                      {!DropDownIsToggleP ? (
                        // Open Menu
                        <button
                          className="outline-none pl-5  py-[2px] "
                          onClick={() =>
                            setDropDownIsToggleP(!DropDownIsToggleP)
                          }
                        >
                          <BiChevronRight className="w-6 h-6 " />
                        </button>
                      ) : (
                        // Close Menu
                        <button
                          className="outline-none  pl-5  py-[2px]"
                          onClick={() =>
                            setDropDownIsToggleP(!DropDownIsToggleP)
                          }
                        >
                          <BiChevronDown className="w-6 h-6 " />
                        </button>
                      )}
                    </div>
                  </div>

                  {DropDownIsToggleP && (
                    <motion.div
                      className="   py-2.5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <ul className={`space-y-1py-5 px-5`}>
                        <li className="">
                          <Link
                            href={"/portfolio"}
                            className=" whitespace-nowrap  w-2/3 block "
                          >
                            <div className="">
                              <span className="block text-lg ">
                                Social Media Strategy
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href={"/content-writing"}
                            className=" whitespace-nowrap   w-2/3 block "
                          >
                            <div className="">
                              <span className="block text-lg ">
                                Content Writing
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>

                <li className="w-full ">
                  <div className="">
                    <Link
                      href={"/contact"}
                      className="font-bold font-Antonio  w-1/2 block"
                    >
                      <div className=" ">
                        <span className=" transform transition-transform translate-y-0 duration-300">
                          Contact
                        </span>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
