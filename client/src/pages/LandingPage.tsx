import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

// 1. Import your new image
import journalImage from '@/assets/digital-journal.png';

const LandingPage = () => {
  return (
    // This main container will center everything on a dark background
    <div className="flex flex-col items-center justify-center h-full text-center p-4 bg-zinc-900">
      
      {/* 2. Display your image */}
      <img
        src={journalImage}
        alt="A pink digital journal with the title 'Your Digital Journal'"
        // 3. These classes make the image responsive
        className="w-full max-w-xl h-auto"
      />

      {/* 4. The button is placed directly below the image */}
      <SignInButton mode="modal">
        <button
          // 5. Added some margin-top for spacing
          className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full shadow-lg mt-8 hover:bg-pink-100 transition-all duration-300 transform hover:scale-105"
        >
          Let's Get Started
        </button>
      </SignInButton>
      
    </div>
  );
};

export default LandingPage;