import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full z-50 top-3 flex justify-center">
      <div
        className="flex items-center justify-between 
        rounded-full px-6 py-2 max-w-3xl w-[90%]
        bg-white/30 dark:bg-gray-900/30 
        backdrop-blur-md border border-white/20 dark:border-gray-700/30
        shadow-lg transition-all duration-300"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-lg font-bold text-brand-600 dark:text-brand-400 flex items-center font-synonym"
        >
          <img 
            src="./logo/wallpaper-logo.png" 
            alt="Logo" 
            className="h-8 w-7 mr-2 rounded-full" 
          />
          Wallpaper Zone
        </NavLink>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800/40 hover:scale-110 transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800/40 hover:scale-110 transition"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 items-center font-outfit">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center transition px-3 py-1 rounded-full ${
                isActive
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/generate"
            className={({ isActive }) =>
              `flex items-center transition px-4 py-1.5 rounded-full ${
                isActive
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
              }`
            }
          >
            Generate
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800/40 hover:scale-110 transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 w-[90%] max-w-3xl rounded-2xl 
          bg-white/30 dark:bg-gray-900/30 backdrop-blur-md 
          border border-white/20 dark:border-gray-700/30 shadow-lg md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center transition px-3 py-1 rounded-full ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/generate"
              className={({ isActive }) =>
                `flex items-center transition px-4 py-1.5 rounded-full ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
                }`
              }
              onClick={toggleMenu}
            >
              Generate
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
