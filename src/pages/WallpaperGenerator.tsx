import React, { useState, useRef } from 'react'
import { ChromePicker } from 'react-color'
import tinycolor from 'tinycolor2'
import { Download, AlertTriangle, ChevronDown } from 'lucide-react'

const WallpaperGenerator: React.FC = () => {
  const [color, setColor] = useState('#3B82F6')
  const [gradient, setGradient] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateWallpaper = () => {
    const baseColor = tinycolor(color)
    const complementaryColor = baseColor.complement().toHexString()

    return gradient
      ? `linear-gradient(135deg, ${baseColor.toHexString()}, ${complementaryColor})`
      : baseColor.toHexString()
  }

  const downloadWallpaper = () => {
    try {
      const canvas = canvasRef.current
      if (!canvas) {
        setError('Canvas not available')
        return
      }

      const scaleFactor = window.devicePixelRatio || 1
      canvas.width = 1080 * scaleFactor
      canvas.height = 1920 * scaleFactor
      canvas.style.width = '1080px'
      canvas.style.height = '1920px'

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        setError('Could not get canvas context')
        return
      }

      ctx.scale(scaleFactor, scaleFactor)

      const background = generateWallpaper()
      if (background.startsWith('linear-gradient')) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, tinycolor(color).complement().toHexString())
        ctx.fillStyle = gradient
      } else {
        ctx.fillStyle = background
      }

      ctx.fillRect(0, 0, canvas.width / scaleFactor, canvas.height / scaleFactor)

      const link = document.createElement('a')
      link.download = 'outfit_wallpaper.png'
      link.href = canvas.toDataURL('image/png')
      link.click()

      setError(null)
    } catch (err) {
      setError('Failed to download wallpaper')
      console.error(err)
    }
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded w-[90%] max-w-sm text-sm sm:text-base">
          <div className="flex items-center">
            <AlertTriangle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            {error}
          </div>
        </div>
      )}

      {/* Color Selection */}
      <div className="w-full flex flex-col items-center py-6 sm:py-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200 flex items-center font-synonym text-center">
          Color Selection
        </h2>
        <p className="text-gray-700 dark:text-gray-500 mb-6 text-center text-sm sm:text-base font-satoshi">
          Pick your favorite color and customize <br className="hidden sm:block" /> your wallpaper easily.
        </p>
        <div className="flex flex-col items-center rounded-lg w-full">
          <ChromePicker
            color={color}
            onChange={(color) => setColor(color.hex)}
            className="mb-4 w-full max-w-[280px] sm:max-w-[300px]"
          />
          <div className="flex items-center space-x-3 mb-4 text-sm sm:text-base">
            <label className="flex items-center cursor-pointer text-gray-700 dark:text-gray-300 font-outfit">
              <input
                type="checkbox"
                checked={gradient}
                onChange={() => setGradient(!gradient)}
                className="mr-2 cursor-pointer"
              />
              Generate Gradient
            </label>
          </div>
          <button
            onClick={downloadWallpaper}
            className="bg-brand-500 text-white px-5 py-3 rounded-lg hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center w-full justify-center max-w-[280px] sm:max-w-[300px] font-semibold text-sm sm:text-base"
          >
            <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download Wallpaper
          </button>
        </div>
      </div>

      {/* Wallpaper Preview */}
      <div className="w-full flex flex-col items-center py-6 sm:py-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200 flex items-center font-synonym text-center">
          Wallpaper Preview
        </h2>
        <p className="text-gray-700 dark:text-gray-500 mb-6 text-center text-sm sm:text-base font-satoshi">
          See how your chosen color or gradient <br className="hidden sm:block" /> will look on the wallpaper.
        </p>
        <div
          className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-full aspect-[9/16] rounded-lg shadow-lg"
          style={{
            background: generateWallpaper(),
            transition: 'background 0.3s ease'
          }}
        />
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* FAQ Section */}
      <div className="col-span-1 md:col-span-2 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center font-excon">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          {[
            {
              q: 'Can I use my wallpaper on mobile and desktop?',
              a: 'Yes, wallpapers are generated in HD size suitable for both mobile and desktop devices.'
            },
            {
              q: 'Does gradient mode work on all colors?',
              a: 'Yes, gradient mode automatically generates a complementary color for a smooth background.'
            }
          ].map((faq, i) => (
            <div key={i} className="border rounded-lg dark:border-gray-700">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left text-gray-800 dark:text-gray-200 font-semibold font-synonym text-sm sm:text-base"
              >
                {faq.q}
                <ChevronDown
                  className={`transform transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                    openFAQ === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === i && (
                <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-600 dark:text-gray-400 font-satoshi text-sm sm:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WallpaperGenerator