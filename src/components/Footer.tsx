import React from 'react'
import { Palette, Instagram, Twitter, Facebook, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
                 <img 
                  src="./logo/wallpaper-logo.png" 
                  alt="Logo" 
                  className="h-9 w-8 mr-2 rounded-full" 
                  />
            <span className="text-lg font-bold text-brand-600 dark:text-brand-400 flex items-center font-synonym">Wallpaper Zone</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Create your perfect wallpaper that matches your outfit and style. 
            Simple, elegant and AI powered wallpaper generator for your phone. 
          </p>
          <div className="flex space-x-4">
            
            <a href="https://x.com/codewithdhruba" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
              <Facebook size={20} />
            </a>
            <a href="https://github.com/codewithdhruba01" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dhrubaraj-pati/" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-800 dark:text-gray-100 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="/about" className="hover:text-brand-500 transition">About</a></li>
            <li><a href="/generate" className="hover:text-brand-500 transition">Generate</a></li>
            <li><a href="#" className="hover:text-brand-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gray-800 dark:text-gray-100 font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <Mail size={16} /> <span>info@outfitwallpaper.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} /> <span>+91 9876543210</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} /> <span>Kolkata, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
     <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Outfit Wallpaper Generator. <br />Maintained by{" "}
  <a
    href="https://codewithdhruba.in"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-brand-500 hover:underline"
  >
    Dhrubaraj Pati
  </a>. All rights reserved.
    </div>
    </footer>
  )
}
export default Footer