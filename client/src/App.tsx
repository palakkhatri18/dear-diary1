import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // 1. Add Link to imports
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from '@clerk/clerk-react';

import Navbar from '@/components/Navbar';
import backgroundImage from '@/assets/background-pattern.jpg';

const Home = lazy(() => import('@/pages/Home'));
const DiaryEntry = lazy(() => import('@/pages/DiaryEntry'));
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const ConnectPage = lazy(() => import('@/pages/ConnectPage')); // 2. Import your new page

function App() {
  return (
    <div 
      className="grid grid-rows-[auto_1fr_auto] h-screen bg-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      
      {/* 3. IMPORTANT: Changed overflow-y-hidden to overflow-y-auto */}
      <main className="overflow-y-auto">
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
            
            {/* 4. Add the route for your new page */}
            <Route path="/connect" element={<ConnectPage />} />
            
          </Routes>
        </Suspense>
      </main>

      {/* 5. The footer text is now wrapped in a Link component */}
      <footer className="text-center p-4 text-base text-zinc-700 border-t border-white/50 bg-white/75 backdrop-blur-sm">
        <Link to="/connect" className="hover:text-pink-500 transition-colors">
          made with ❤️ by palak
        </Link>
      </footer>
    </div>
  );
}

export default App;