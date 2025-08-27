import React, { useState } from 'react';
import { Camera, Play, Image as ImageIcon, Video, Award, Users } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'spaces', name: 'Sacred Spaces', icon: <Camera className="w-4 h-4" /> },
    { id: 'events', name: 'Events', icon: <Users className="w-4 h-4" /> },
    { id: 'ceremonies', name: 'Ceremonies', icon: <Award className="w-4 h-4" /> },
    { id: 'videos', name: 'Videos', icon: <Video className="w-4 h-4" /> }
  ];

  const galleryItems = [
    {
      title: "Main Prayer Hall",
      description: "Our beautiful main hall where daily prayers and ceremonies take place with traditional architecture",
      emoji: "🏛️",
      gradient: "from-orange-400/20 to-orange-600/20",
      category: "spaces",
      type: "image"
    },
    {
      title: "Meditation Garden",
      description: "Peaceful outdoor space for contemplation and walking meditation surrounded by nature",
      emoji: "🌸",
      gradient: "from-teal-400/20 to-teal-600/20",
      category: "spaces",
      type: "image"
    },
    {
      title: "Vesak Day 2023",
      description: "Highlights from our grand Vesak Day celebration with community participation",
      emoji: "🎉",
      gradient: "from-purple-400/20 to-purple-600/20",
      category: "events",
      type: "video"
    },
    {
      title: "Community Kitchen",
      description: "Where we prepare meals together and practice mindful cooking for the community",
      emoji: "🍲",
      gradient: "from-blue-400/20 to-blue-600/20",
      category: "spaces",
      type: "image"
    },
    {
      title: "Morning Chanting",
      description: "Daily morning chanting ceremony bringing peace and mindfulness to start the day",
      emoji: "🕉️",
      gradient: "from-pink-400/20 to-pink-600/20",
      category: "ceremonies",
      type: "video"
    },
    {
      title: "Library & Study Room",
      description: "Extensive collection of Buddhist texts and quiet study spaces for learning",
      emoji: "📚",
      gradient: "from-indigo-400/20 to-indigo-600/20",
      category: "spaces",
      type: "image"
    },
    {
      title: "Youth Program",
      description: "Young practitioners engaging in interactive learning and spiritual activities",
      emoji: "👥",
      gradient: "from-green-400/20 to-green-600/20",
      category: "events",
      type: "image"
    },
    {
      title: "Full Moon Ceremony",
      description: "Monthly gathering under the full moon with meditation and merit sharing",
      emoji: "🌕",
      gradient: "from-yellow-400/20 to-yellow-600/20",
      category: "ceremonies",
      type: "video"
    },
    {
      title: "Children's Activity Area",
      description: "Special space designed for our young practitioners and families with engaging activities",
      emoji: "🎨",
      gradient: "from-red-400/20 to-red-600/20",
      category: "spaces",
      type: "image"
    },
    {
      title: "Community Service",
      description: "Our volunteers serving the local community through various outreach programs",
      emoji: "🤝",
      gradient: "from-cyan-400/20 to-cyan-600/20",
      category: "events",
      type: "image"
    },
    {
      title: "Meditation Retreat",
      description: "Intensive meditation retreat sessions for deeper spiritual practice and growth",
      emoji: "🧘‍♂️",
      gradient: "from-violet-400/20 to-violet-600/20",
      category: "events",
      type: "video"
    },
    {
      title: "Ceremony Hall",
      description: "Grand hall for special celebrations and large gatherings with traditional decorations",
      emoji: "🎭",
      gradient: "from-amber-400/20 to-amber-600/20",
      category: "spaces",
      type: "image"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore the beautiful spaces within our temple complex and witness the vibrant community life through our collection of images and videos.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-700"
              >
                <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden border-b border-gray-700`}>
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="text-gray-500">
                      {item.type === 'video' ? <Video className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4">{item.description}</p>
                  <button className="text-orange-400 hover:text-teal-400 font-semibold transition-colors duration-300 text-sm">
                    {item.type === 'video' ? 'Watch Video' : 'View Details'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="text-6xl mb-6">🗺️</div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Virtual Temple Tour
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't visit us in person? Take our interactive virtual tour to explore all our facilities and learn about our daily practices from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                Start Virtual Tour
              </button>
              <button className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-black transform hover:scale-105 transition-all duration-300">
                Download Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos", icon: "📸" },
              { number: "50+", label: "Videos", icon: "🎥" },
              { number: "12", label: "Sacred Spaces", icon: "🏛️" },
              { number: "100+", label: "Events Documented", icon: "📅" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;