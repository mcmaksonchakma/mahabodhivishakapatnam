import React from 'react';
import { Calendar, MapPin, Clock, Users, Star, Gift, Music, Utensils } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Vesak Day Celebration",
      date: "May 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Temple Hall",
      attendees: "500+ expected",
      description: "Celebrate Buddha's birth, enlightenment, and passing with traditional ceremonies, meditation, and community feast.",
      status: "upcoming",
      image: "🏮",
      category: "Festival",
      highlights: ["Traditional ceremonies", "Community feast", "Cultural performances", "Meditation sessions"]
    },
    {
      title: "Meditation Retreat",
      date: "June 8-10, 2024",
      time: "6:00 AM - 8:00 PM",
      location: "Temple Grounds",
      attendees: "50 participants",
      description: "Three-day intensive retreat focusing on deep meditation practice and dharma study.",
      status: "registration-open",
      image: "🧘‍♀️",
      category: "Retreat",
      highlights: ["Silent meditation", "Dharma talks", "Personal guidance", "Vegetarian meals"]
    },
    {
      title: "Community Service Day",
      date: "March 22, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Local Community Center",
      attendees: "100 volunteers",
      description: "Join us in serving the community through food distribution and environmental cleanup.",
      status: "completed",
      image: "🤝",
      category: "Service",
      highlights: ["Food distribution", "Environmental cleanup", "Community outreach", "Team building"]
    },
    {
      title: "Full Moon Ceremony",
      date: "April 23, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Meditation Garden",
      attendees: "200+ participants",
      description: "Monthly full moon gathering with chanting, meditation, and sharing of merit.",
      status: "upcoming",
      image: "🌕",
      category: "Ceremony",
      highlights: ["Group chanting", "Moonlight meditation", "Merit sharing", "Community bonding"]
    },
    {
      title: "Youth Buddhist Camp",
      date: "July 20-22, 2024",
      time: "All Day",
      location: "Temple Complex",
      attendees: "75 young practitioners",
      description: "Special three-day camp for young Buddhists with activities, teachings, and fun learning experiences.",
      status: "registration-open",
      image: "🏕️",
      category: "Youth Program",
      highlights: ["Interactive workshops", "Outdoor activities", "Peer learning", "Cultural games"]
    },
    {
      title: "Dharma Discussion Series",
      date: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      location: "Study Hall",
      attendees: "30-40 participants",
      description: "Weekly series exploring Buddhist philosophy and its application in contemporary life.",
      status: "ongoing",
      image: "📚",
      category: "Educational",
      highlights: ["Text study", "Group discussions", "Q&A sessions", "Take-home resources"]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold border border-orange-500/30">Upcoming</span>;
      case 'registration-open':
        return <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-semibold border border-teal-500/30">Registration Open</span>;
      case 'completed':
        return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-semibold border border-gray-500/30">Completed</span>;
      case 'ongoing':
        return <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">Ongoing</span>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Festival':
        return <Gift className="w-4 h-4" />;
      case 'Retreat':
        return <Star className="w-4 h-4" />;
      case 'Service':
        return <Users className="w-4 h-4" />;
      case 'Ceremony':
        return <Music className="w-4 h-4" />;
      case 'Youth Program':
        return <Star className="w-4 h-4" />;
      case 'Educational':
        return <Users className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our community gatherings, celebrations, and spiritual events throughout the year. Experience the joy of shared practice and learning.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{event.image}</div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      {getCategoryIcon(event.category)}
                      <span className="text-sm">{event.category}</span>
                    </div>
                  </div>
                  {getStatusBadge(event.status)}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300 font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <span className="text-gray-300 font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300 font-medium">{event.attendees}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Event Highlights:</h4>
                  <div className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {event.status !== 'completed' && (
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-teal-600 text-white font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                    {event.status === 'registration-open' ? 'Register Now' : 'Learn More'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="text-4xl mb-6">📧</div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Events
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive updates about upcoming events, special ceremonies, and community activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;