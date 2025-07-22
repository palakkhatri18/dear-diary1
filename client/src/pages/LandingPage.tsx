import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sign-in');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-700 text-white text-center p-4">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
        Your Virtual Dear Diary 📖
      </h1>
      <p className="text-xl mb-8 animate-fade-in-up">
        A safe and private space for your thoughts.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-white text-zinc-800 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-zinc-200 transition-colors duration-300"
      >
        Let's Get Started
      </button>
    </div>
  );
};

export default LandingPage;