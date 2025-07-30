// 1. DELETE these lines from the top of App.tsx:
// import { FaLinkedin } from 'react-icons/fa6';
// import { SiGmail } from 'react-icons/si';

// 2. REPLACE your entire footer with this:
<footer className="flex flex-col sm:flex-row items-center justify-between p-6 border-t border-zinc-200 text-zinc-600">
  
  {/* Left Side: Your Name */}
  <div>
    made with ❤️ by palak
  </div>
  
  {/* Right Side: Social Icons */}
  <div className="flex items-center gap-x-6 mt-4 sm:mt-0">
    <a 
      href="https://www.linkedin.com/in/palak-khatri-7236b8247/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="hover:text-pink-500 transition-colors"
    >
      {/* LinkedIn SVG Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>
    <a 
      href="mailto:palakkhatri934@gmail.com"
      aria-label="Send an Email"
      className="hover:text-pink-500 transition-colors"
    >
      {/* Gmail SVG Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
    </a>
  </div>

</footer>