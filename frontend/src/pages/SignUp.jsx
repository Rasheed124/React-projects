import React, { useState } from 'react'

import { useSignupMutation } from "../services/appApi";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [signup, { error, isLoading, isError }] = useSignupMutation();
    

    const handleSignup = (e) => {
      e.preventDefault();
      signup({ name, email, password });
  }
  
    return (
      <section className="bg-white/20">
        <div className="">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:px-16 lg:py-12 max-w-xl mx-auto">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Signup
              </h1>

              {isError && alert(error.data)}
  
              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
  
              <form onSubmit={handleSignup} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    className="mt-1 p-2.5 outline-none border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
  
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 p-2.5 outline-none border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
  
                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 p-2.5 outline-none border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
  
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type='submit'  
                    disabled={isLoading}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
  
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline">Login</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    );

}

export default SignUp
