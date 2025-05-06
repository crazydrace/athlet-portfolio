import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 shadow-lg border-b border-red-500">
      {/* Animated Eagle Logo + Text */}
      <div className="flex items-center space-x-3 group">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-yellow-400 to-red-700 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl">
            🦅
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent relative overflow-hidden">
          <span className="relative inline-block">
            <span className="block hover:-translate-y-full transition-transform duration-700">
              Khabib "The Eagle"
            </span>
            <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-700 text-red-900 dark:text-gray-100">
              Nurmagomedov
            </span>
          </span>
        </h1>
      </div>

      {/* Navigation with Animated Underline */}
      <nav className="flex items-center space-x-6 sm:space-x-10">
        {[
          { name: "Stats", href: "#stats" },
          { name: "Career", href: "#career" },
          { name: "Gallery", href: "#gallery" },
          { name: "Quotes", href: "#quotes" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition duration-300 group"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}

        {/* 3D Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative p-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 shadow-md hover:shadow-xl transform transition-all duration-500 hover:-rotate-12 active:scale-95"
        >
          <span className="relative z-10 text-xl transition-transform duration-700 hover:rotate-180">
            {darkMode ? <MdWbSunny /> : <FaMoon />}
          </span>
          <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-red-400/30 to-green-400/30 blur-sm"></span>
        </button>
      </nav>
    </header>
  );
}
