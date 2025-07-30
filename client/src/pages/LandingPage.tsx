import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import journalImage from '@/assets/digital-journal.png';

const LandingPage = () => {
  return (
    // The classes on this div have been updated
    <div className="flex flex-col items-center justify-center h-full text-center p-4 bg-white overflow-hidden">
      
      <img
        src={journalImage}
        alt="A pink digital journal with the title 'Your Digital Journal'"
        className="w-full max-w-xl h-auto"
      />

      <SignInButton mode="modal">
        <button
          className="bg-black text-white font-bold px-8 py-3 rounded-full shadow-lg mt-8 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105"
        >
          Let's Get Started
        </button>
      </SignInButton>
      
    </div>
  );
};

export default LandingPage;