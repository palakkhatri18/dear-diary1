import connectBackground from '@/assets/about me.png';

const ConnectPage = () => {
  return (
    // The background classes on this div have been updated
    <div 
      className="relative flex flex-col items-center justify-center min-h-full text-center p-8 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${connectBackground})` }}
    >
      {/* This div adds a semi-transparent dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* This div keeps your content on top of the overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Connect With Me
        </h1>
        <p className="text-lg text-gray-200 drop-shadow-lg">
          Here are the best ways to get in touch or see my other work.
        </p>

        <div className="mt-12 text-white">
          <p>Links coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;