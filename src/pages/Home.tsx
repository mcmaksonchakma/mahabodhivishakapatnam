import React from 'react';
import { ChevronDown, Sparkles, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "Cultivating loving-kindness and empathy for all beings",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building connections through shared spiritual practice",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Wisdom",
      description: "Learning ancient teachings for modern life challenges",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-transparent rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-400/20 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-transparent rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-60 right-10 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400 animate-pulse">
                Mahabodhi
              </span>
              <span className="block text-4xl md:text-5xl mt-2 text-gray-300">
                Vishakapatnam
              </span>
            </h1>
          </div>
          
          <div className="mb-8 animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              A sanctuary of peace, wisdom, and spiritual growth
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join us on a journey of mindfulness, compassion, and inner transformation through ancient Buddhist teachings and modern community practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link
              to="/about"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Discover Our Path
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Join Our Community
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the core principles that guide our spiritual community and practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-700"
              >
                <div className={`text-white mb-4 p-3 rounded-xl bg-gradient-to-r ${feature.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Home;