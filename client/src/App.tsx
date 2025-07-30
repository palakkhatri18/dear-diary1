import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from '@clerk/clerk-react';

import Navbar from '@/components/Navbar';

// 1. Import the icons you need at the top of the file
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Home = lazy(() => import('@/pages/Home'));
const DiaryEntry = lazy(() => import('@/pages/DiaryEntry'));
const LandingPage = lazy(() => import('@/pages/LandingPage'));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow overflow-y-auto">
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SignedIn>
                    <Home />
                  </SignedIn>
                  <SignedOut>
                    <LandingPage />
                  </SignedOut>
                </>
              }
            />
            {/* ... other routes ... */}
            <Route
              path="/entry/:date"
              element={
                <>
                  <SignedIn>
                    <DiaryEntry />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/sign-in/*"
              element={<SignIn routing="path" path="/sign-in" />}
            />
            <Route
              path="/sign-up/*"
              element={<SignUp routing="path" path="/sign-up" />}
            />
          </Routes>
        </Suspense>
      </main>

      {/* 2. This is the new, updated footer */}
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
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:palakkhatri2004@gmail.com"
            aria-label="Send an Email"
            className="hover:text-pink-500 transition-colors"
          >
            <SiGmail size={24} />
          </a>
        </div>
        
      </footer>
    </div>
  );
}

export default App;