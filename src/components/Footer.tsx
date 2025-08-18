import React from 'react';
import { Heart, Gift, Star, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Gift className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">HBD Vegas</span>
            </div>
            <p className="text-gray-400 mb-6">
              Un site d'anniversaire spécialement créé pour célébrer Lontchi 
              avec amour et créativité.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              <Star className="h-6 w-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Gift className="h-6 w-6 text-green-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#memories" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Souvenirs
                </a>
              </li>
              <li>
                <a href="#wishes" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Messages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">contact@hbd-vegas.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 HBD Vegas. Créé avec ❤️ pour Lontchi
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>

        {/* Message final */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl">
          <p className="text-lg text-gray-300 italic">
            "Que cette nouvelle année soit remplie de joie, d'amour et de moments magiques !"
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;