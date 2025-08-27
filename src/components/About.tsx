import React from 'react';
import { Heart, Users, BookOpen, Bot as Lotus } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "Cultivating loving-kindness and empathy for all beings"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building connections through shared spiritual practice"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Wisdom",
      description: "Learning ancient teachings for modern life challenges"
    },
    {
      icon: <Lotus className="w-8 h-8" />,
      title: "Mindfulness",
      description: "Practicing present-moment awareness and inner peace"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Mahabodhi Vishakapatnam, we are dedicated to preserving and sharing the timeless wisdom of Buddhism while creating a welcoming space for spiritual growth and community connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:from-orange-50 hover:to-teal-50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-orange-500 group-hover:text-teal-600 transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-teal-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to Our Sanctuary
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located in the vibrant city of Vishakapatnam, our temple serves as a beacon of peace and spiritual guidance. We offer a blend of traditional Buddhist practices and contemporary approaches to meditation and mindful living.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're seeking inner peace, community connection, or spiritual growth, our doors are open to all who wish to walk the path of enlightenment.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-r from-orange-200 to-teal-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🏛️</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;