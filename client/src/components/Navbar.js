import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
const Navbar = () => {
    return (_jsxs("nav", { className: "flex justify-between items-center px-6 py-4 shadow-md bg-white", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Dear Diary" }), _jsxs("div", { children: [_jsx(SignedIn, { children: _jsx(UserButton, {}) }), _jsx(SignedOut, { children: _jsx(SignInButton, {}) })] })] }));
};
export default Navbar;
