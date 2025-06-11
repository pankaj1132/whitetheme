import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(() => window.innerWidth >= 768);

  return (
    <>
      {/* Hamburger Icon for Mobile and Desktop */}
      <button
        className="fixed top-6 left-6 z-50 text-black text-3xl focus:outline-none"
        onClick={() => setMobileOpen(true)}
        aria-label="Open Menu"
        style={{ display: mobileOpen ? 'none' : 'block' }}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Navbar - Desktop & Mobile Overlay */}
      <aside
        className={`w-72 h-full flex flex-col fixed justify-between border-4 px-10 py-12 z-40 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'var(--theme-bg)', borderColor: 'var(--theme-purple)', color: 'var(--theme-text)' }}
      >
        <div>
          <div className="flex items-center space-x-2 mb-20">
            <img alt="logo" className="w-8 h-8" height="32" src={logo} width="32" />
            <span className="font-extrabold text-lg select-none" style={{ color: 'var(--theme-purple)' }}>
              QuickHire
            </span>
          </div>
          <nav className="flex flex-col space-y-6 text-sm font-normal">
            <Link
              className="font-semibold transition cursor-pointer"
              style={{ color: 'var(--theme-yellow)' }}
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMobileOpen(false)}
            >
              HOME
            </Link>
            <Link
              className="transition cursor-pointer"
              style={{ color: 'var(--theme-purple)' }}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMobileOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              className="transition cursor-pointer"
              style={{ color: 'var(--theme-purple)' }}
              to="service"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMobileOpen(false)}
            >
              Service
            </Link>
            <Link
              className="transition cursor-pointer"
              style={{ color: 'var(--theme-purple)' }}
              to="whatwedo"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMobileOpen(false)}
            >
              WHAT WE DO
            </Link>
            <Link
              className="transition cursor-pointer"
              style={{ color: 'var(--theme-purple)' }}
              to="contact-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMobileOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col items-center mb-2">
          <div className="flex space-x-6 text-[#9e9e9e] text-lg mb-2">
            <a aria-label="Facebook" className="hover:text-[#4efb9f] transition transform hover:scale-125 duration-300" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a aria-label="Twitter" className="hover:text-[#4efb9f] transition transform hover:scale-125 duration-300" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a aria-label="Instagram" className="hover:text-[#4efb9f] transition transform hover:scale-125 duration-300" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* Close Icon for Mobile and Desktop */}
        <button
          className="absolute top-6 right-6 text-black text-3xl"
          onClick={() => setMobileOpen(false)}
          aria-label="Close Menu"
          style={{ display: mobileOpen ? 'block' : 'none' }}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>
    </>
  );
};

export default Navbar;