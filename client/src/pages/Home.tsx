import { useEffect } from 'react';
import welcomeImage from '@/assets/welcome-image.png';
import CalendarComponent from '@/components/CalendarComponent';

const Home = () => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      
      <img 
        src={welcomeImage} 
        alt="Welcome to your diary, start journaling today!"
        className="w-full max-w-lg mb-8" 
      />

      {/* We've wrapped the calendar in a new div for the 3D effect */}
      <div className="calendar-3d-wrapper">
        <CalendarComponent />
      </div>

    </div>
  );
};

export default Home;