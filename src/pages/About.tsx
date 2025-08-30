import React from "react"
import { Palette, Image, Download, Sparkles } from "lucide-react"

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white font-excon">
        About <span className="text-brand-500">Wallpaper Generator</span>
      </h1>
      <p className="text-lg text-center font-satoshi text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        The Wallpaper Generator is a simple yet creative tool that lets you create
        custom wallpapers with just a few clicks. Whether you want a solid color
        or a smooth gradient, this app helps you design high-quality wallpapers
        instantly.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center text-center">
          <Palette className="w-10 h-10 text-brand-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit ">
            Color Picker
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-cabinet">
            Choose any color with the advanced color picker powered by react-color.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center text-center">
          <Sparkles className="w-10 h-10 text-brand-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit">
            Gradient Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2  font-cabinet">
            Enable gradient mode to generate smooth, eye-catching wallpapers.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center text-center">
          <Image className="w-10 h-10 text-brand-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit">
            Live Preview
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-cabinet">
            Instantly preview your wallpaper before downloading in full quality.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center text-center">
          <Download className="w-10 h-10 text-brand-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit">
            Easy Download
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-cabinet">
            Save your custom wallpapers in high resolution with one click.
          </p>
        </div>
      </div>

      {/* Credits */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-excon">
          Why We Built This?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 font-synonym">
          We wanted to create a lightweight, fun, and practical tool for anyone
          who enjoys customizing their devices. With simple controls and instant
          previews, Wallpaper Generator makes personalizing your screen easier
          than ever.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Built with ❤️ using React, TailwindCSS, and creativity.
        </p>
      </div>
    </div>
  )
}

export default About