import React from 'react'
import { Link } from 'react-router-dom'
import { Palette, Wand2 } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-600 dark:text-brand-400">
        Create Your Perfect Wallpaper
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Match your phone wallpaper to your outfit and event style
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md mb-8">
        <Link 
          to="/generate" 
          className="bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center justify-center"
        >
          <Wand2 className="mr-2" /> Generate Wallpaper
        </Link>
        <Link 
          to="/generate" 
          className="border border-brand-500 text-brand-600 dark:text-brand-400 px-6 py-3 rounded-lg hover:bg-brand-50 dark:hover:bg-gray-800 transition flex items-center justify-center"
        >
          <Palette className="mr-2" /> Explore Colors
        </Link>
      </div>

      {/* Demo Image Section */}
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mb-8">
        <img 
          src="https://wallpapercave.com/wp/wp5282833.jpg" 
          alt="Demo Wallpaper" 
          className="w-full rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default Home