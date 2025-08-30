import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Palette, Wand2, ArrowRight  } from 'lucide-react'
  

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return (
   
    <div className="text-center flex flex-col items-center justify-center py-12 md:py-12">
      <h1 className="text-5xl md:text-7xl font-excon font-bold mb-8" data-aos="fade-up">
            Create Your Perfect <br/> Wallpaper
      </h1>
      
      <p className="text-xl md:text-xl text-gray-700 dark:text-gray-500 mb-10 max-w-md font-satoshi" data-aos="zoom-in" data-aos-delay="200">
        Match your phone wallpaper to your outfit and event style
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md mb-12">
        <Link 
          to="/generate" 
          className="bg-brand-500 text-white px-6 font-synonym py-3 rounded-lg hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center justify-center"
        >
           Generate Wallpaper
        </Link>
        <Link 
          to="/generate" 
          className="border border-brand-500 text-brand-600 dark:text-brand-400 px-6 py-3 rounded-lg hover:bg-brand-50 dark:hover:bg-gray-800 transition flex items-center justify-center font-synonym font-bold"
        >
           Know More <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>

      {/* Demo Image Section */}
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mb-8" data-aos="zoom-in" data-aos-delay="400">
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