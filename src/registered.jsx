import React, { useState } from 'react';
import{ Link } from 'react-router-dom';

const UpSatePopXForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
    alert('Login attempted!');
    // In a real application, you'd send this data to a backend for authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div
        className="w-full max-w-md p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-opacity-30 border-white
                  transition-all duration-300 ease-in-out hover:scale-[1.005]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)', // Neumorphic shadows
        }}
      >
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight">
           Signin to your PopX account
          </h1>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Address Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 relative -top-2 left-3 px-1 bg-white w-fit rounded-md bg-opacity-70">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-0 block w-full px-5 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 relative -top-2 left-3 px-1 bg-white w-fit rounded-md bg-opacity-70">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-0 block w-full px-5 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>

          {/* Login Button */}
          <Link to="/toyourdat">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg uppercase
                       transition-all duration-300 transform
                       hover:bg-purple-100 hover:border-purple-500 hover:text-purple-800"
            style={{
              background: 'linear-gradient(145deg, #7b3fe9, #6a36d2)', // Matches welcome button gradient
              boxShadow: '6px 6px 12px #6332c0, -6px -6px 12px #8f4cff', // Matches welcome button neumorphic shadow
            }}
          >
            Login
          </button>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default UpSatePopXForm;