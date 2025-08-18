import React, { useEffect, useRef, useState } from 'react';
import { Camera, Heart, Star, Smile } from 'lucide-react';

const Memories: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const memories = [
    {
      id: 1,
      title: "Moments de Joie",
      description: "Des rires partagés et des sourires contagieux",
      icon: Smile,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Aventures Inoubliables",
      description: "Des expériences qui resteront gravées à jamais",
      icon: Star,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Moments Précieux",
      description: "Des instants magiques capturés dans le temps",
      icon: Heart,
      color: "from-red-400 to-pink-500"
    },
    {
      id: 4,
      title: "Souvenirs Photographiques",
      description: "Chaque photo raconte une belle histoire",
      icon: Camera,
      color: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section ref={sectionRef} id="memories" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galerie de Souvenirs
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une collection de moments précieux et de souvenirs inoubliables
            </p>
          </div>

          {/* Grille de souvenirs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {memories.map((memory, index) => {
              const IconComponent = memory.icon;
              return (
                <div
                  key={memory.id}
                  className={`transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${memory.color} flex items-center justify-center`}>
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {memory.title}
                      </h3>
                      <p className="text-gray-600">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Galerie photo simulée */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className={`aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <Camera className="h-8 w-8 text-gray-500" />
              </div>
            ))}
          </div>

          {/* Message inspirant */}
          <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Chaque Moment Compte
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Les plus beaux souvenirs ne sont pas dans les photos, 
              mais dans les cœurs de ceux qui les ont vécus ensemble.
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;