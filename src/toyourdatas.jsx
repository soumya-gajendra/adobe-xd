import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
function Toyourdatas() {
   const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? (checked ? value : prevData[name]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div
        className="w-full max-w-md p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-opacity-30 border-white
                  transition-all duration-300 ease-in-out hover:scale-[1.005]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-8 leading-tight drop-shadow-sm">
          Create your PopX Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-purple-700 mb-1 relative -top-2 left-3 px-1 bg-white bg-opacity-70 rounded-md w-fit">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-0 block w-full px-4 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-purple-700 mb-1 relative -top-2 left-3 px-1 bg-white bg-opacity-70 rounded-md w-fit">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone number"
          
              className="mt-0 block w-full px-4 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-purple-700 mb-1 relative -top-2 left-3 px-1 bg-white bg-opacity-70 rounded-md w-fit">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Enter your Email"
              value={formData.emailAddress}

              className="mt-0 block w-full px-4 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-700 mb-1 relative -top-2 left-3 px-1 bg-white bg-opacity-70 rounded-md w-fit">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="mt-0 block w-full px-4 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-purple-700 mb-1 relative -top-2 left-3 px-1 bg-white bg-opacity-70 rounded-md w-fit">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your Company Name"
              className="mt-0 block w-full px-4 py-3 border border-purple-300 rounded-lg text-gray-900 placeholder-purple-400
                         focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500
                         bg-white bg-opacity-50 transition duration-200"
            />
          </div>
          <div className="pt-2">
            <span className="block text-purple-800 text-md font-bold mb-3 drop-shadow-sm">
              Are you an Agency? <span className="text-red-500">*</span>
            </span>
            <div className="flex items-center space-x-6">
              <label htmlFor="isAgencyYes" className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  id="isAgencyYes"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-purple-600 border-purple-300 focus:ring-purple-500 transition duration-200 ease-in-out"
                  required
                />
                <span className="ml-2 text-purple-700 text-base font-medium">Yes</span>
              </label>
              <label htmlFor="isAgencyNo" className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  id="isAgencyNo"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-purple-600 border-purple-300 focus:ring-purple-500 transition duration-200 ease-in-out"
                  required
                />
                <span className="ml-2 text-purple-700 text-base font-medium">No</span>
              </label>
            </div>
          </div>
          <Link to="/yourdata">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg uppercase
                       hover:bg-purple-100 hover:border-purple-500 hover:text-purple-800 // Reusing hover from welcome button
                       transition-all duration-300 transform"
            style={{
              background: 'linear-gradient(145deg, #7b3fe9, #6a36d2)', // Matches welcome button gradient
              boxShadow: '6px 6px 12px #6332c0, -6px -6px 12px #8f4cff', // Matches welcome button neumorphic shadow
            }}
          >
            Create Account
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Toyourdatas;