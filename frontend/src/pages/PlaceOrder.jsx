import React from 'react';

const PlaceOrder = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
            <div className="rounded-lg  p-8 shadow-lg  lg:p-12">
              <header className="text-left mb-3">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Delivey Information
                </h1>
              </header>
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg outline-none border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full outline-none border rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full outline-none border rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="City"
                      type="text"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      City
                    </label>
                    <select
                      name="HeadlineAct"
                      placeholder="city"
                      id="HeadlineAct"
                 className="w-full outline-none border rounded-lg border-gray-200 p-3 text-sm"
                    >
                      <option value="">Please select</option>
                      <option value="JM">John Mayer</option>
                      <option value="SRV">Stevie Ray Vaughn</option>
                      <option value="JH">Jimi Hendrix</option>
                      <option value="BBK">B.B King</option>
                      <option value="AK">Albert King</option>
                      <option value="BG">Buddy Guy</option>
                      <option value="EC">Eric Clapton</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full outline-none border rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceOrder;
