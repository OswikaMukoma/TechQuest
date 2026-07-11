import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>

          <h1 className="text-2xl font-extrabold text-slate-900">
            TechQuest
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 text-lg font-medium text-slate-700 md:flex">

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

      </nav>
    </header>
  );
}

export default Navbar;