import welcomeImage from '@/assets/welcome-image.jpg';
import CalendarComponent from '@/components/CalendarComponent';

const Home = () => {
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