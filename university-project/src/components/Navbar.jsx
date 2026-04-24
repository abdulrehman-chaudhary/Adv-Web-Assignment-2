// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/programs", label: "Programs" },
  { path: "/admission", label: "Admission" },
  { path: "/faculty", label: "Faculty" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <img
            src="/assets/images/Logo.png"
            alt="UMT Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/admission"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-umt-orange hover:bg-umt-orange/90 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md shadow-umt-orange/30 hover:shadow-umt-orange/40 hover:scale-105"
          >
            Apply Now
          </Link>

          {/* Mobile hamburger */}
          <button
            id="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admission"
            onClick={closeMenu}
            className="block pt-3 px-4 pb-3 bg-umt-orange hover:bg-umt-orange/90 text-white font-bold text-sm rounded-xl text-center transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
