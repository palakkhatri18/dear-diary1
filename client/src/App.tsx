import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
const ConnectPage = lazy(() => import('@/pages/ConnectPage'));

function App() {
  return (
    <div 
      className="grid grid-rows-[auto_1fr_auto] h-screen bg-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      
      <main className="overflow-y-hidden">
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
            <Route path="/connect" element={<ConnectPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="text-center p-4 text-base text-zinc-700 border-t border-white/50 bg-white/75 backdrop-blur-sm">
        <Link to="/connect" className="hover:text-pink-500 transition-colors">
          made with ❤️ by{' '}
          <span className="underline underline-offset-4">palakk</span>
        </Link>
      </footer>
    </div>
  );
}

export default App;