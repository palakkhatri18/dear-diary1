// 1. We need to import useEffect from React
import React, { useEffect } from 'react'; 
import { SignInButton } from '@clerk/clerk-react';
import journalImage from '@/assets/digital-journal.png';

const LandingPage = () => {
  
  // 2. This hook will add a style to the main page body to prevent scrolling
  useEffect(() => {
    // When this page loads, add 'overflow-hidden' to the <body>
    document.body.classList.add('overflow-hidden');

    // When the user navigates away from this page, remove the style
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []); // The empty array [] means this effect runs only once when the page loads

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 bg-white">
      
      <img
        src={journalImage}
        alt="A pink digital journal with the title 'Your Digital Journal'"
        className="w-full max-w-xl h-auto"
      />

      <SignInButton mode="modal">
        {/* 3. The button classes have been changed back to the pink style */}
        <button
          className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full shadow-lg mt-8 border border-pink-200 hover:bg-pink-100 transition-all duration-300 transform hover:scale-105"
        >
          Let's Get Started
        </button>
      </SignInButton>
      
    </div>
  );
};

export default LandingPage;