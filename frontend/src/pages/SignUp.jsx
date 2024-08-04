import React, { useState, useEffect } from 'react';
import { useSignupMutation } from '../services/appApi';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [signup, { error, isLoading, isError }] = useSignupMutation();

  useEffect(() => {
    if (isError && error) {
      setErrorMessage(error.data);
      const timer = setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isError, error]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !number) {
      setErrorMessage('Please fill in all fields.');
      setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
      return;
    }
    if (!/^0\d{10}$/.test(number)) {
      setErrorMessage('Please enter a valid Nigerian phone number.');
      setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
      return;
    }
    signup({ name, email, password, number });
  };

  return (
    <section className="bg-white/20">
      <div className="">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:px-16 lg:py-12 max-w-xl mx-auto">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Signup
            </h1>

            {errorMessage && (
              <div className="mt-4 p-2.5 bg-red-200 text-red-700 rounded-md">
                {errorMessage}
              </div>
            )}

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form
              onSubmit={handleSignup}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="Number"
                  name="number"
                  className="mt-1 p-2.5 outline-none border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="Password"
                    name="password"
                    className="mt-1 p-2.5 outline-none border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="/login" className="text-gray-700 underline">
                    Login
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUp;
