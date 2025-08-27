import React from 'react';
import { Clock, Users, Calendar, Star } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Daily Meditation",
      description: "Join our morning and evening meditation sessions for inner peace and clarity",
      time: "6:00 AM & 7:00 PM",
      duration: "45 minutes",
      participants: "Open to all",
      icon: <Clock className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Dharma Study Circle",
      description: "Weekly discussions on Buddhist teachings and their application in modern life",
      time: "Saturdays 4:00 PM",
      duration: "2 hours",
      participants: "All levels",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Mindfulness Workshops",
      description: "Learn practical mindfulness techniques for stress reduction and well-being",
      time: "Monthly",
      duration: "3 hours",
      participants: "Beginners welcome",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Youth Sangha",
      description: "Special programs designed for young practitioners and students",
      time: "Sundays 3:00 PM",
      duration: "1.5 hours",
      participants: "Ages 12-25",
      icon: <Star className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse range of spiritual programs designed to support your journey towards enlightenment and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${program.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Schedule:</span>
                  <span className="text-gray-800 font-semibold">{program.time}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Duration:</span>
                  <span className="text-gray-800 font-semibold">{program.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Participants:</span>
                  <span className="text-gray-800 font-semibold">{program.participants}</span>
                </div>
              </div>

              <button className={`w-full mt-6 py-3 rounded-xl bg-gradient-to-r ${program.color} text-white font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300`}>
                Join Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;