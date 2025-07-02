import React, { useEffect, useState, useCallback } from 'react';
function Yourpage() {
    return( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4 sm:p-6 lg:p-8">
      {/* The Glassmorphism card container */}
      <div
        className="max-w-3xl w-full mx-auto p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-opacity-30 border-white
                  transition-all duration-300 ease-in-out hover:scale-[1.005] overflow-hidden" // Added overflow-hidden for rounded corners
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)', // Neumorphic shadows
        }}
      >
        {/* Top Dotted Separator - Adjusted for glassmorphism style */}
        <div className="border-t border-dashed border-white border-opacity-50 mb-6"></div> {/* Inferred style from glassmorphism aesthetic */}

        {/* Header */}
        <div className="px-0 py-0 mb-6"> {/* Adjusted padding for closer look to other elements */}
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 leading-tight"> {/* Color adjusted to purple-800 for consistency with "Welcome to PopX" */}
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="border-t border-white border-opacity-50 pt-6 mt-6 flex items-center space-x-4"> {/* Adjusted border, padding, and margin for spacing */}
          <div className="relative">
            <img
              className="h-20 w-20 rounded-full object-cover border-2 border-white border-opacity-70" // Adjusted border color/opacity for glassmorphism
              src="https://via.placeholder.com/150/A78BFA/FFFFFF?text=JD" // Placeholder for profile image
              alt="Marry Doe"
            />
            {/* Camera Icon Overlay */}
            <div className="absolute bottom-0 right-0 -mr-1 -mb-1 h-7 w-7 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-sm">📸</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Marry Doe</h2> {/* Text color remains dark for contrast */}
            <p className="text-sm text-gray-700">Marry@Gmail.Com</p> {/* Text color remains dark for contrast */}
          </div>
        </div>

        {/* Description Text */}
        <div className="px-0 py-6 mt-6 border-t border-white border-opacity-50"> {/* Adjusted border, padding, and margin for spacing */}
          <p className="text-sm text-gray-800 leading-relaxed"> {/* Text color remains dark for readability */}
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Bottom Dotted Separator - Adjusted for glassmorphism style */}
        <div className="border-b border-dashed border-white border-opacity-50 pt-6"></div> {/* Inferred style from glassmorphism aesthetic */}

        {/* You can add more settings options here, following a similar pattern */}
        {/* For example:
        <div className="px-0 py-4 border-t border-white border-opacity-50">
          <button className="w-full text-left py-2 text-gray-800 hover:bg-white hover:bg-opacity-30 rounded-md">Edit Profile</button>
        </div>
        */}
      </div>
    </div>);
}
export default Yourpage;