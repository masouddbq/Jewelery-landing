import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = ({ isOpen, setIsOpen }) => {

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Hamburger Menu */}
      <div className={`hamburger-menu fixed top-0 left-0 w-40 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-2">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
          </div>
          
          {/* Menu Items */}
          <ul className="space-y-4">
            <li>
              <Link 
                to="/bangle" 
                className="block text-gray-800 hover:text-main-green transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                دستبند
              </Link>
            </li>
            <li>
              <Link 
                to="/chain" 
                className="block text-gray-800 hover:text-main-green transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                گردنبند
              </Link>
            </li>
            <li>
              <Link 
                to="/women" 
                className="block text-gray-800 hover:text-main-green transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                زنانه
              </Link>
            </li>
            <li>
              <Link 
                to="/men" 
                className="block text-gray-800 hover:text-main-green transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                مردانه
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                className="block text-gray-800 hover:text-main-green transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                خانه
              </Link>
            </li>
            <li className="border-t pt-4 mt-4">
              <Link 
                to="/about" 
                className="block text-gray-600 hover:text-main-green transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-gray-600 hover:text-main-green transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                تماس با ما
              </Link>
            </li>
            <li className="border-t pt-4 mt-4">
              <Link 
                to="/login" 
                className="block text-gray-600 hover:text-main-green transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ورود
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="block text-gray-600 hover:text-main-green transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu