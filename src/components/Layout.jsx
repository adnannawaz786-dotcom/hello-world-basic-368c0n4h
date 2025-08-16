import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation Header */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white/20 p-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_8px_16px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-slate-700 font-semibold text-lg">Hello World</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-2">
                <NavLink href="#" active>Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Services</NavLink>
                <NavLink href="#">Contact</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden w-10 h-10 bg-white/30 backdrop-blur-sm rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_4px_8px_-2px_rgba(0,0,0,0.1)] border border-white/20 flex items-center justify-center hover:bg-white/40 transition-all duration-200">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-0">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white/20 p-8">
            <div className="text-center">
              <p className="text-slate-600 text-sm">
                © 2024 Hello World Basic. Made with ❤️ and claymorphism.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children, active = false }) => {
  const baseClasses = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border";
  const activeClasses = active 
    ? "bg-white/50 text-slate-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_4px_8px_-2px_rgba(0,0,0,0.1)] border-white/30" 
    : "text-slate-600 hover:bg-white/30 hover:text-slate-700 border-transparent hover:border-white/20 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_4px_-1px_rgba(0,0,0,0.05)]";

  return (
    <a href={href} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </a>
  );
};

export default Layout;