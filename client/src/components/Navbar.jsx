function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            TechQuest
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 text-lg font-medium text-slate-700 md:flex">
          <li>
            <a href="#" className="transition hover:text-purple-600">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-purple-600">
              Explore
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-purple-600">
              Quizzes
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-purple-600">
              About
            </a>
          </li>
        </ul>

        {/* Sign In Button */}
        <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
          Sign In
        </button>

      </nav>
    </header>
  );
}

export default Navbar;