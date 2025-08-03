// 1. Import the image from your project files
import connectImage from '../assets/connect.png';
const ConnectPage = () => {
  return (
    // This outer container centers the card on the page
    <div className="flex items-center justify-center min-h-full p-4">
      
      {/* This inner container is the new blurred "glass" card */}
      <div className="w-full max-w-2xl rounded-2xl bg-white/50 backdrop-blur-xl p-8 sm:p-12 shadow-2xl border border-white/20">
        
        <div className="text-center">
          {/* 2. Replace the <h1> text with the <img> tag */}
          <img
            src={connectImage}
            alt="Connect With Me"
            className="mx-auto mb-4 w-full max-w-sm transition-transform duration-300 ease-in-out hover:scale-105"
          />
          
          <p className="text-lg text-zinc-600">
            Here are the best ways to get in touch or see my other work.
          </p>

          <div className="mt-12 text-zinc-700">
            <p>Links coming soon...</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ConnectPage;