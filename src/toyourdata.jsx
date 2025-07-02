import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Toyourdata(){
    
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6">
      <div
        className="w-full max-w-sm p-10 rounded-3xl backdrop-blur-lg border border-opacity-30 border-white
                   transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)', 
        }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-purple-800 drop-shadow-sm">
            Welcome to <br/>PopX
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="space-y-5 mt-10">
        <Link to="/toyourdatas">
          <button
            className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg
                       hover:bg-purple-100 hover:border-purple-500 hover:text-purple-800"
            style={{
              background: 'linear-gradient(145deg, #7b3fe9, #6a36d2)',
              boxShadow: '6px 6px 12px #6332c0, -6px -6px 12px #8f4cff', 
            }}
          >
            Create Account
        </button>
        </Link>
        <Link to="/registereds">
        <button
            className="w-full py-4 px-6 rounded-xl text-purple-700 font-semibold text-lg
                       transition-all duration-300 transform hover:bg-gray-100 hover:scale-102 hover:boxShadow-inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff
                       focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
            // style={{
            //   background: '#e0e0e0',
            //   boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff',
            // }}
          >
            Already Registered? <span className="font-bold">Login</span>
        </button>
        </Link>
        </div>
        </div>
    </div>
     
        
        </>
    );
}
export default Toyourdata;