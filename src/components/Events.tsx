import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

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
      image: "🏮"
    },
    {
      title: "Meditation Retreat",
      date: "June 8-10, 2024",
      time: "6:00 AM - 8:00 PM",
      location: "Temple Grounds",
      attendees: "50 participants",
      description: "Three-day intensive retreat focusing on deep meditation practice and dharma study.",
      status: "registration-open",
      image: "🧘‍♀️"
    },
    {
      title: "Community Service Day",
      date: "March 22, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Local Community Center",
      attendees: "100 volunteers",
      description: "Join us in serving the community through food distribution and environmental cleanup.",
      status: "completed",
      image: "🤝"
    },
    {
      title: "Full Moon Ceremony",
      date: "April 23, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Meditation Garden",
      attendees: "200+ participants",
      description: "Monthly full moon gathering with chanting, meditation, and sharing of merit.",
      status: "upcoming",
      image: "🌕"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">Upcoming</span>;
      case 'registration-open':
        return <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">Registration Open</span>;
      case 'completed':
        return <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <section id="events" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community gatherings, celebrations, and spiritual events throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:from-orange-50 hover:to-teal-50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4">{event.image}</div>
                {getStatusBadge(event.status)}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">{event.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700 font-medium">{event.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 font-medium">{event.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700 font-medium">{event.attendees}</span>
                </div>
              </div>

              {event.status !== 'completed' && (
                <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-teal-600 text-white font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300">
                  {event.status === 'registration-open' ? 'Register Now' : 'Learn More'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;