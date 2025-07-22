import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Navbar from "@/components/Navbar";

// Lazy load the components for code splitting and faster initial load
const Home = lazy(() => import("@/pages/Home"));
const DiaryEntry = lazy(() => import("@/pages/DiaryEntry"));
const LandingPage = lazy(() => import("@/pages/LandingPage")); // Import the new page

function App() {
  return (
    <>
      <Navbar />
      {/* Add a Suspense fallback for the loading state */}
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
                  {/* Show the LandingPage to signed-out users */}
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
                  {/* Protect this route by redirecting to sign-in */}
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
    </>
  );
}

export default App;