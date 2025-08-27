import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Main Prayer Hall",
      description: "Our beautiful main hall where daily prayers and ceremonies take place",
      emoji: "🏛️",
      gradient: "from-orange-200 to-orange-300"
    },
    {
      title: "Meditation Garden",
      description: "Peaceful outdoor space for contemplation and walking meditation",
      emoji: "🌸",
      gradient: "from-teal-200 to-teal-300"
    },
    {
      title: "Community Kitchen",
      description: "Where we prepare meals together and practice mindful cooking",
      emoji: "🍲",
      gradient: "from-purple-200 to-purple-300"
    },
    {
      title: "Library & Study Room",
      description: "Extensive collection of Buddhist texts and quiet study spaces",
      emoji: "📚",
      gradient: "from-blue-200 to-blue-300"
    },
    {
      title: "Children's Activity Area",
      description: "Special space designed for our young practitioners and families",
      emoji: "🎨",
      gradient: "from-pink-200 to-pink-300"
    },
    {
      title: "Ceremony Hall",
      description: "Grand hall for special celebrations and large gatherings",
      emoji: "🎭",
      gradient: "from-yellow-200 to-yellow-300"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">Spaces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beautiful spaces within our temple complex, each designed to support different aspects of spiritual practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <button className="mt-4 text-orange-500 hover:text-teal-600 font-semibold transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-teal-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Virtual Temple Tour
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't visit us in person? Take our interactive virtual tour to explore all our facilities and learn about our daily practices.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;