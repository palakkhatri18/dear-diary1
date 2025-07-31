// 1. We need to import useEffect from React
import { useEffect } from 'react';
import welcomeImage from '@/assets/welcome-image.png';
import CalendarComponent from '@/components/CalendarComponent';

const Home = () => {

  // 2. This hook will add a style to the main page body to prevent scrolling
  useEffect(() => {
    // When this page loads, add 'overflow-hidden' to the <body>
    document.body.classList.add('overflow-hidden');

    // When you navigate away from this page, remove the style
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []); // The empty array [] means this effect runs only when the page loads

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