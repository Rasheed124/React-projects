import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { FaAngleUp } from "react-icons/fa";


type Props = {
  footer: Contact[];
};

const Footer = ({ footer }: Props) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {footer &&
        footer.map((footerData) => (
          <footer
            key={footerData._id}
            className="pb-14  bg-contact-dark-overlay text-deep-black relative"
          >
            <div className="flex flex-col w-full  ">
              <div className=" pb-5">
                <div className="px-4 pt-14 ">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 pt-10  ">
                    <div className="md:order-2  max-w-2xl ">
                      <form action="">
                        <div className="mb-1">
                          <input
                            className="w-full max-w-md pt-4 pb-3 outline-none placeholder:text-lg placeholder:text-deep-black  bg-inherit border-b border-deep-black"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </form>

                      <div className="mb-6">
                        <p>{footerData.form}</p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="">
                          <h4 className="font-Antonio font-bold mb-3 text-xl">
                            INFO
                          </h4>
                          <div className=" flex flex-col flex-wrap">
                            {Array.from(footerData.infoText).map(
                              (address, id) => (
                                <p key={id} className="">
                                  {address}
                                </p>
                              ),
                            )}
                          </div>

                          <Link
                            href={`mailto:${footerData.mail}`}
                            className="mt-2 block"
                          >
                            {footerData.mail}
                          </Link>
                        </div>
                        <div className="place-self-start">
                          <h4 className="font-Antonio font-bold mb-3 text-xl">
                            LINKS
                          </h4>

                          {Array.from(footerData.socialHandle).map(
                            (handle, id) => (
                              <span key={id} className="block">
                                {handle.length > 1 &&
                                  handle.includes("twitter") && (
                                    <Link href={`${handle}`} className=" ">
                                      Twitter
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("facebook") && (
                                    <Link href={`${handle}`} className="">
                                      Facebook
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("instagram") && (
                                    <Link href={`${handle}`} className="">
                                      Instagram
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("tiktok") && (
                                    <Link href={`${handle}`} className="">
                                      Tiktok
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("snapchat") && (
                                    <Link href={`${handle}`} className="">
                                      Snapchat
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("youtube") && (
                                    <Link href={`${handle}`} className="">
                                      Youtube
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("linkedin") && (
                                    <Link href={`${handle}`} className="">
                                      Linkedin
                                    </Link>
                                  )}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 place-content-end ">
                      <h2 className="font-Antonio text-5xl font-bold mb-2 uppercase ">
                        {footerData.logo}
                      </h2>

                      <p>{footerData.text}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Go to Top */}
              <div className="absolute bottom-10 right-10 w-10 h-10 flex p-5 rounded-full justify-center items-center flex-col bg-light-white text-deep-black">
                {" "}
                {showTopBtn && (
                  <FaAngleUp
                    className=""
                    onClick={goToTop}
                  >
                    Top Up
                  </FaAngleUp>
                )}{" "}
              </div>
            </div>
          </footer>
        ))}
    </>
  );
};

export default Footer;
