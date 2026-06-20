import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="font-bold text-xl dark:text-white">
          AH7
        </h2>

        <div className="flex gap-8 items-center">
          <a href="#projects" className="dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#blog" className="dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
          <a href="#contact" className="dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

      </div>
    </nav>
  );
}