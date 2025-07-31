// The 'useEffect' import is gone
import welcomeImage from '@/assets/welcome-image.png';
import CalendarComponent from '@/components/CalendarComponent';

const Home = () => {

  // The useEffect hook has been completely removed from here.

  return (
    <div className="flex flex-col items-center justify-start p-4 sm:p-8">
        <img 
    src={welcomeImage} 
    alt="Welcome to your diary, start journaling today!"
    className="w-full max-w-md mb-4" 
        />
      <div className="calendar-3d-wrapper">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Home;