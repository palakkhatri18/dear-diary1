import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div 
      className="flex flex-col min-h-screen bg-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      
      <main className="flex-grow overflow-y-hidden">
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
          </Routes>
        </Suspense>
      </main>

      <footer className="text-center p-6 text-base text-zinc-600 border-t border-zinc-200 bg-white/50 backdrop-blur-sm">
        made with ❤️ by palak
      </footer>
    </div>
  );
}

export default App;