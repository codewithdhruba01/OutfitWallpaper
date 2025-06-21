import React, { useState, useRef, useEffect } from 'react'
import { ChromePicker } from 'react-color'
import tinycolor from 'tinycolor2'
import { Download, Palette, Wand2, AlertTriangle } from 'lucide-react'

const WallpaperGenerator: React.FC = () => {
  const [color, setColor] = useState('#3B82F6')
  const [gradient, setGradient] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative" role="alert">
          <div className="flex items-center">
            <AlertTriangle className="mr-2" />
            {error}
          </div>
        </div>
      )}
      
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400 flex items-center">
          <Palette className="mr-2" /> Color Selection
        </h2>
        <div className="flex flex-col items-center">
          <ChromePicker 
            color={color}
            onChange={(color) => setColor(color.hex)}
            className="mb-4 w-full max-w-[300px]"
          />
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center cursor-pointer text-gray-700 dark:text-gray-300">
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
            className="bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 transition flex items-center w-full justify-center max-w-[300px]"
          >
            <Download className="mr-2" /> Download Wallpaper
          </button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400 flex items-center">
          <Wand2 className="mr-2" /> Wallpaper Preview
        </h2>
        <div 
          className="w-full aspect-[9/16] rounded-lg shadow-lg"
          style={ { 
            background: generateWallpaper(),
            transition: 'background 0.3s ease'
          } }
        />
        <canvas 
          ref={canvasRef} 
          className="hidden" 
          style={ { display: 'none' } }
        />
      </div>
    </div>
  )
}

export default WallpaperGenerator