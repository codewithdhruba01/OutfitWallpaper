import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Palette, Home, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-bold text-brand-600 dark:text-brand-400 flex items-center">
          <Palette className="mr-2" /> Outfit Wallpaper
        </Link>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link 
            to="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition flex items-center"
          >
            <Home className="mr-1" /> Home
          </Link>
          <Link 
            to="/generate" 
            className="bg-brand-500 text-white px-4 py-2 rounded-md hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center"
          >
            <Palette className="mr-1" /> Generate Wallpaper
          </Link>
          <button 
            onClick={toggleTheme} 
            className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition flex items-center"
                onClick={toggleMenu}
              >
                <Home className="mr-1" /> Home
              </Link>
              <Link 
                to="/generate" 
                className="bg-brand-500 text-white px-4 py-2 rounded-md hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center"
                onClick={toggleMenu}
              >
                <Palette className="mr-1" /> Generate Wallpaper
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar