import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Our Policy
            </h2>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-md">
            <article className="">
              <img
                alt=""
                src={assets.exchange_icon}
                className="w-12 m-auto mb-5"
              />

              <div className=" text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Finding the Journey to Mordor
                </h3>
              </div>
            </article>
            <article className="">
              <img
                alt=""
                src={assets.exchange_icon}
                className="w-12 m-auto mb-5"
              />

              <div className=" text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Finding the Journey to Mordor
                </h3>
              </div>
            </article>
            <article className="">
              <img
                alt=""
                src={assets.exchange_icon}
                className="w-12 m-auto mb-5"
              />

              <div className=" text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Finding the Journey to Mordor
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPolicy;
