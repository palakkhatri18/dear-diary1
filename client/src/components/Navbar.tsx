import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

// 1. Import your new logo image
import dearDiaryLogo from "@/assets/dear-diary-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      
      {/* 2. Replace the <h1> text with a clickable Link containing your logo */}
      <Link to="/">
        <img 
          src={dearDiaryLogo} 
          alt="Dear Diary Logo" 
          // 3. These classes control the logo's size
          className="h-10 w-auto" 
        />
      </Link>

      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
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