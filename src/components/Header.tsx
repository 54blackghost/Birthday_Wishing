import React, { useState } from 'react';
import { Menu, X, Gift } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 h-[70px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-gray-900">HBD Vegas</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
              Accueil
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
              À Propos
            </a>
            <a href="#memories" className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
              Souvenirs
            </a>
            <a href="#wishes" className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
              Vœux
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
                Accueil
              </a>
              <a href="#about" className="block text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
                À Propos
              </a>
              <a href="#memories" className="block text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
                Souvenirs
              </a>
              <a href="#wishes" className="block text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
                Vœux
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;