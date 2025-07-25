import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Dear Diary</h1>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* This ensures the navbar sign-in also uses the modal */}
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;