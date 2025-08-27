import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-200 to-transparent rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-200 to-transparent rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-60 right-10 w-24 h-24 bg-gradient-to-r from-yellow-200 to-transparent rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600 animate-pulse">
              Mahabodhi
            </span>
            <span className="block text-4xl md:text-5xl mt-2 text-gray-700">
              Vishakapatnam
            </span>
          </h1>
        </div>
        
        <div className="mb-8 animate-fade-in-up animation-delay-300">
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            A sanctuary of peace, wisdom, and spiritual growth
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Join us on a journey of mindfulness, compassion, and inner transformation through ancient Buddhist teachings and modern community practices.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover Our Path
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-teal-500 text-teal-600 rounded-full font-semibold hover:bg-teal-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Join Our Community
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-orange-500 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;