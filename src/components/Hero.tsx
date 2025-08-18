import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 relative overflow-hidden">
      {/* Étoiles animées */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Star className="h-1 w-1 text-white opacity-70" />
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Titre principal avec effet Vegas */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>J</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>O</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>Y</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>U</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>X</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-red-500 mb-2 animate-pulse">
              ANNIVERSAIRE
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              LONTCHI !
            </h3>
          </div>

          {/* Décorations */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
            <Heart className="h-10 w-10 text-red-500 animate-pulse" />
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bienvenue sur ton site d'anniversaire personnalisé ! 
            Une célébration spéciale pour une personne exceptionnelle.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Découvrir les Surprises
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Laisser un Message
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;