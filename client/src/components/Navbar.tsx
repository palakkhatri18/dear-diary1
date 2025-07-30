import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Dear Diary</h1>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          {/* This SignInButton now wraps a custom, styled button */}
          <SignInButton mode="modal">
            <button className="bg-white text-pink-500 font-bold px-4 py-2 rounded-full shadow-md border border-pink-200 hover:bg-pink-100 transition-colors">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;