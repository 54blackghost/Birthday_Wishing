import React, { useEffect, useRef, useState } from 'react';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À Propos de Lontchi
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une personne extraordinaire qui mérite une célébration exceptionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image de profil */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6">
                    <User className="h-24 w-24 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lontchi</h3>
                  <p className="text-red-500 font-semibold">La Star du Jour ⭐</p>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Informations */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Jour Spécial</h4>
                </div>
                <p className="text-gray-600">
                  Aujourd'hui, nous célébrons une année de plus de bonheur, de rires et de moments inoubliables !
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Qualités Exceptionnelles</h4>
                </div>
                <p className="text-gray-600">
                  Une personne généreuse, drôle et inspirante qui illumine la vie de tous ceux qui l'entourent.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Aventures à Venir</h4>
                </div>
                <p className="text-gray-600">
                  Une nouvelle année pleine de projets excitants, de découvertes et de moments magiques !
                </p>
              </div>
            </div>
          </div>

          {/* Citations inspirantes */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto">
              "Les anniversaires sont les jalons de notre voyage, 
              chaque année apportant de nouvelles aventures et de précieux souvenirs."
            </blockquote>
            <div className="mt-6 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="h-4 w-4 text-red-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;