import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, SignUp, RedirectToSignIn, } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import DiaryEntry from "@/pages/DiaryEntry";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(SignedIn, { children: _jsx(Home, {}) }), _jsx(SignedOut, { children: _jsx(RedirectToSignIn, {}) })] }) }), _jsx(Route, { path: "/entry/:date", element: _jsxs(_Fragment, { children: [_jsx(SignedIn, { children: _jsx(DiaryEntry, {}) }), _jsx(SignedOut, { children: _jsx(RedirectToSignIn, {}) })] }) }), _jsx(Route, { path: "/sign-in/*", element: _jsx(SignIn, { routing: "path", path: "/sign-in" }) }), _jsx(Route, { path: "/sign-up/*", element: _jsx(SignUp, { routing: "path", path: "/sign-up" }) })] })] }));
}
export default App;
