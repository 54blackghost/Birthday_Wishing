import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, Heart, Star } from 'lucide-react';

const Wishes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Marie",
      message: "Joyeux anniversaire Lontchi ! Que cette nouvelle année t'apporte bonheur et réussite ! 🎉",
      time: "Il y a 2 heures"
    },
    {
      id: 2,
      name: "Pierre",
      message: "Une personne formidable mérite une fête formidable ! Profite bien de ta journée spéciale ! 🎂",
      time: "Il y a 5 heures"
    },
    {
      id: 3,
      name: "Sophie",
      message: "Happy Birthday ! Que tous tes rêves se réalisent cette année ! ✨",
      time: "Il y a 1 jour"
    }
  ]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && name.trim()) {
      const newWish = {
        id: wishes.length + 1,
        name: name.trim(),
        message: message.trim(),
        time: "À l'instant"
      };
      setWishes([newWish, ...wishes]);
      setMessage('');
      setName('');
    }
  };

  return (
    <section ref={sectionRef} id="wishes" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Messages d'Anniversaire
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Laisse un message spécial pour Lontchi et partage tes vœux d'anniversaire
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de message */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Laisse ton Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ton Prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Écris ton prénom..."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ton Message d'Anniversaire
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Écris tes vœux d'anniversaire pour Lontchi..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le Message</span>
                </button>
              </form>
            </div>

            {/* Liste des messages */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Messages Reçus</h3>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {wishes.map((wish, index) => (
                  <div
                    key={wish.id}
                    className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {wish.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">{wish.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{wish.time}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{wish.message}</p>
                    <div className="mt-3 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">{wishes.length}</div>
              <div className="text-gray-600">Messages</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
              <div className="text-gray-600">Amour</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">1</div>
              <div className="text-gray-600">Star</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">365</div>
              <div className="text-gray-600">Jours de Bonheur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;