import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>

          <h1 className="text-2xl font-extrabold text-slate-900">
            TechQuest
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-700">

          <li>
            <Link
              to="/"
              className="transition hover:text-purple-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/explore"
              className="transition hover:text-purple-600"
            >
              Explore
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition hover:text-purple-600"
            >
              About
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-purple-50"
          >
            Home
          </Link>

          <Link
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-purple-50"
          >
            Explore
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-purple-50"
          >
            About
          </Link>

        </div>
      )}
    </header>
  );
}

export default Navbar;