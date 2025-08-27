import React from 'react';
import { Heart, Users, BookOpen, Bot as Lotus, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "Cultivating loving-kindness and empathy for all beings through daily practice and community service.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building meaningful connections through shared spiritual practice and mutual support.",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Wisdom",
      description: "Learning ancient Buddhist teachings and applying them to modern life challenges.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Lotus className="w-8 h-8" />,
      title: "Mindfulness",
      description: "Practicing present-moment awareness and developing inner peace through meditation.",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const stats = [
    { number: "29", label: "Years of Service", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Community Members", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Programs Offered", icon: <Award className="w-6 h-6" /> },
    { number: "10+", label: "Countries Reached", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Mahabodhi</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Established in 1995, Mahabodhi Vishakapatnam has been a beacon of Buddhist wisdom and spiritual guidance, serving the community with compassion and dedication.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-orange-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Mission</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                At Mahabodhi Vishakapatnam, we are dedicated to preserving and sharing the timeless wisdom of Buddhism while creating a welcoming space for spiritual growth and community connection.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Our mission extends beyond traditional temple activities to include modern approaches to meditation, mindful living, and community service that address contemporary challenges while staying true to Buddhist principles.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-gray-700">
                <div className="text-8xl">🏛️</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-700"
              >
                <div className={`text-white mb-4 p-3 rounded-xl bg-gradient-to-r ${feature.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to a thriving spiritual community, discover our path of growth and service.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Welcome to Our Sanctuary
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Located in the vibrant coastal city of Vishakapatnam, our temple serves as a beacon of peace and spiritual guidance. We offer a harmonious blend of traditional Buddhist practices and contemporary approaches to meditation and mindful living.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you're seeking inner peace, community connection, or spiritual growth, our doors are open to all who wish to walk the path of enlightenment. Join us in creating a more compassionate world, one heart at a time.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-r from-orange-400/10 to-teal-400/10 rounded-2xl flex items-center justify-center border border-gray-600">
                  <div className="text-6xl">🕉️</div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;