import React, { useEffect, useState, useCallback } from 'react';

function Yourpage() {
 
    return( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4 sm:p-6 lg:p-8">
     
      <div
        className="max-w-3xl w-full mx-auto p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-opacity-30 border-white
                  transition-all duration-300 ease-in-out hover:scale-[1.005] overflow-hidden" 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        }}
      >
       
        <div className="border-t border-dashed border-white border-opacity-50 mb-6"></div>

       
        <div className="px-0 py-0 mb-6"> 
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 leading-tight">
            Account Settings
          </h1>
        </div>

      
        <div className="border-t border-white border-opacity-50 pt-6 mt-6 flex items-center space-x-4">
          <div className="relative">
            <img
              className="h-20 w-20 rounded-full object-cover border-2 border-white border-opacity-70"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeO52olh7y7C0q00TYK22OfojrZuzcCL7-A&s"
              alt="Marry Doe"
            />
            
            <div className="absolute bottom-0 right-0 -mr-1 -mb-1 h-7 w-7 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-sm">📸</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-700">Marry@gmail.com</p> 
          </div>
        </div>

       
        <div className="px-0 py-6 mt-6 border-t border-white border-opacity-50"> 
          <p className="text-sm text-gray-800 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        
        <div className="border-b border-dashed border-white border-opacity-50 pt-6"></div>
      </div>
    </div>);
}
export default Yourpage;    