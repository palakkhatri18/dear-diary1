import welcomeImage from '@/assets/welcome-image.jpg'; // 1. Import your new welcome image

// Note: You may need to import your Calendar component here
// For example: import Calendar from '@/components/Calendar';

const Home = () => {
  return (
    // 2. The dark background and text-white classes are removed from this div
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      
      {/* 3. The old welcome text is replaced with your new image */}
      <img 
        src={welcomeImage} 
        alt="Welcome to your diary, start journaling today!"
        className="w-full max-w-lg mb-8" 
      />

      {/* Your Calendar component goes here */}
      {/* For example: <Calendar /> */}
      {/* Since I don't have your Calendar code, I'm leaving this as a placeholder.
          The calendar from your screenshot should appear here. */}
      
      <div className="text-zinc-700">
        (Your Calendar Component Will Appear Here)
      </div>

    </div>
  );
};

export default Home;