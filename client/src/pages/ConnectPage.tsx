import connectImage from '../assets/connect.png';
import { Linkedin, Github, Mail, Code } from 'lucide-react';

const ConnectPage = () => {
  return (
    <div className="grid place-items-center min-h-screen p-4">
      
      <div className="w-full max-w-2xl rounded-2xl bg-white/50 backdrop-blur-xl p-8 sm:p-12 border border-white/20
                     shadow-lg transition-all duration-500 ease-in-out
                     hover:scale-105 hover:-rotate-x-2
                     hover:shadow-2xl hover:shadow-pink-500/40">

        <div className="text-center">
          <img
            src={connectImage}
            alt="Connect With Me"
            className="mx-auto mb-8 w-full max-w-sm"
          />

          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:palakkhatri2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-zinc-800 hover:text-pink-500 transition-colors duration-300"
            >
              <Mail size={30} strokeWidth={2} />
            </a>
            <a
              href="https://www.linkedin.com/in/palak-khatri-7236b8247/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-800 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={30} strokeWidth={2} />
            </a>
            {/* -- THIS IS THE UPDATED LINE -- */}
            <a
              href="https://github.com/palakkhatri18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-800 hover:text-amber-800 transition-colors duration-300"
            >
              <Github size={30} strokeWidth={2} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/palakkhatri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks"
              className="text-zinc-800 hover:text-green-500 transition-colors duration-300"
            >
              <Code size={30} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;