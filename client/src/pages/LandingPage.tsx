
import { SignInButton } from '@clerk/clerk-react';
import journalImage from '@/assets/digital-journal.png';

const LandingPage = () => {
  
  // The entire useEffect hook that was here has been DELETED.

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 bg-white">
      
      <img
        src={journalImage}
        alt="A pink digital journal with the title 'Your Digital Journal'"
        className="w-full max-w-xl h-auto"
      />

      <SignInButton mode="modal">
        <button
          className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full shadow-lg mt-4 border border-pink-200 hover:bg-pink-100 transition-all duration-300 transform hover:scale-105"
        >
          Let's Get Started
        </button>
      </SignInButton>
      
    </div>
  );
};

export default LandingPage;