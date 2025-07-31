// 1. We need to import useEffect
import { useEffect } from 'react';
import welcomeImage from '@/assets/welcome-image.png'; // Using the .png as requested
import CalendarComponent from '@/components/CalendarComponent';

const Home = () => {

  // 2. This hook adds the style to the main page to prevent scrolling
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // This part is a cleanup function that removes the style when you navigate away
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []); // The empty array ensures this runs only once when the page loads

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      
      <img 
        src={welcomeImage} 
        alt="Welcome to your diary, start journaling today!"
        className="w-full max-w-lg mb-8" 
      />

      <CalendarComponent />

    </div>
  );
};

export default Home;