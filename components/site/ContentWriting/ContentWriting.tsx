"use client";

import urlFor from "@/lib/urlFor";
import { log } from "console";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  contentwritings: ContentWriting[];
};

const ContentWriting = ({ contentwritings }: Props) => {
  //   { console.log(contentwritings)}
  return (
    <>
      <section className="  ">
        <div className=" ">
          <header className="px-5 py-16 bg-light-white ">
            <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
              <h2 className="uppercase font-extrabold font-Antonio text-6xl mb-1 ">
                Content Writing
              </h2>

              <div className="space-x-1">
                <Link href={"/"}>Home</Link>
                <span>/</span>
                <Link href={"#"}>Content Writing</Link>
              </div>
            </div>
          </header>

          <div className="bg-white px-5 py-16">
            {contentwritings.map((contentwriting) => (
              <div
                key={contentwriting._id}
                className="grid grid-cols-1  sm:grid-cols-3  max-w-6xl mx-auto "
              >
                <div className="mt-10">
                  <h3 className="font-bold text-2xl pb-2 ">
                    {contentwriting.title}
                  </h3>
                  <h4 className="font-semibold text-lg">
                    {contentwriting.subTitle}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:col-start-2 sm:col-end-4 gap-9 my-10  ">
                  {contentwriting.writings &&
                    contentwriting.writings.map((writing) => (
                      <div key={writing._id} className="space-y-3  ">
                        <div className="relative h-[200px] w-full">
                          <Image
                            className="object-cover max-w-full"
                            src={urlFor(writing.image).url()}
                            alt={writing.title}
                            fill
                          />
                        </div>

                        <h3 className="font-bold text-xl">{writing.title}</h3>
                        <p className="mb-4">
                          How To Boost E-Commerce Revenue Using Instagram
                          Product Tagging
                        </p>

                        <Link className="mt-2" href={`${writing.url}`}>
                          Read More
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ContentWriting;
