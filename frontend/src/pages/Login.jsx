import React, { useState } from 'react';
import { useLoginMutation } from "../services/appApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <section className="bg-white/20">
      <div className="">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:px-16 lg:py-12 max-w-xl mx-auto">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login 
            </h1>

            {/* Display error message */}
            {isError && (
              <div className="mt-4 p-2.5 bg-red-200 text-red-700 rounded-md">
                {error.data}
              </div>
            )}

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>

            <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">
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
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  No account?
                  <a href="/signup" className="text-gray-700 underline">Sign up</a>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
