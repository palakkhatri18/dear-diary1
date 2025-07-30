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

const Home = lazy(() => import('@/pages/Home'));
const DiaryEntry = lazy(() => import('@/pages/DiaryEntry'));
const LandingPage = lazy(() => import('@/pages/LandingPage'));

function App() {
  return (
    // 1. Add this main wrapper div with the layout classes
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* 2. Wrap your content in a <main> tag with flex-grow */}
      <main className="flex-grow">
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

      {/* 3. Add the footer here, at the bottom of the app layout */}
      <footer className="text-center p-4 text-sm text-foreground/50">
        made with ❤️ by palak
      </footer>
    </div>
  );
}

export default App;