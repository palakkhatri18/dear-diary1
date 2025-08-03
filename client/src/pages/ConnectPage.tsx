// The background image import has been removed.

const ConnectPage = () => {
  return (
    // This outer container centers the card on the page
    <div className="flex items-center justify-center min-h-full p-4">
      
      {/* This inner container is the new blurred "glass" card */}
      <div className="w-full max-w-2xl rounded-2xl bg-white/50 backdrop-blur-xl p-8 sm:p-12 shadow-2xl border border-white/20">
        
        <div className="text-center">
          {/* The text is now dark for readability */}
          <h1 className="text-5xl font-bold mb-4 text-zinc-800">
            Connect With Me
          </h1>
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