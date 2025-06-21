import React from 'react'
import { Palette, Instagram, Twitter, Facebook, Github, Linkedin } from 'lucide-react'

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/dhrubaraj_pati/#', 
    color: 'text-pink-500 hover:text-pink-600'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/codewithdhruba', 
    color: 'text-blue-400 hover:text-blue-500'
  },
  { 
    icon: Facebook, 
    href: 'https://facebook.com', 
    color: 'text-blue-600 hover:text-blue-700'
  },
  { 
    icon: Github, 
    href: 'https://github.com/codewithdhruba01', 
    color: 'text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/dhrubaraj-pati/',
    color: 'text-blue-700 hover:text-blue-800'
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map(({ icon: Icon, href, color }) => (
            <a 
              key={href} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${color} transition-colors duration-300 p-2 rounded-full`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <p className="flex items-center justify-center text-gray-600 dark:text-gray-300">
          <Palette className="mr-2" /> 
          © {new Date().getFullYear()} Outfit Wallpaper Generator Maintained by Dhrubaraj Pati
        </p>
      </div>
    </footer>
  )
}

export default Footer