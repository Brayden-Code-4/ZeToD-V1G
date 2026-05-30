import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

// A wrapper component to conditionally hide/show layouts or handle scroll resets
function LayoutWrapper({ children }) {
  const location = useLocation();
  // We can show navbar/footer everywhere to ensure premium continuous branding!
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
