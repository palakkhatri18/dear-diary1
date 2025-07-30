import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import diaryNotebook from '@/assets/diary-notebook.png';

const LandingPage = () => {
  return (
    // We can simplify this container now
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      
      {/* Container for the notebook and the text on top */}
      <div className="relative w-full max-w-2xl">
        {/* The diary image acts as the background */}
        <img src={diaryNotebook} alt="A cute diary notebook" className="w-full h-auto" />

        {/* This div holds all the content that goes ON TOP of the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl md:text-6xl font-heading text-white mb-4 drop-shadow-lg">
            Your Little Secret Keeper
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
            A cozy spot for your thoughts, dreams, and memories.
          </p>
          <SignInButton mode="modal">
            <button
              className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition-all duration-300 transform hover:scale-105"
            >
              Let's Get Started
            </button>
          </SignInButton>
        </div>
      </div>

      {/*
        The footer has been removed from here because it now lives in App.tsx
      */}

    </div>
  );
};

export default LandingPage;