import React from 'react';
import { Clock, Users, Calendar, Star, BookOpen, Heart, Zap, Target } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Daily Meditation",
      description: "Join our morning and evening meditation sessions for inner peace and clarity. Experience guided mindfulness practices in a serene environment.",
      time: "6:00 AM & 7:00 PM",
      duration: "45 minutes",
      participants: "Open to all",
      level: "Beginner to Advanced",
      icon: <Clock className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
      features: ["Guided meditation", "Silent sitting", "Walking meditation", "Q&A sessions"]
    },
    {
      title: "Dharma Study Circle",
      description: "Weekly discussions on Buddhist teachings and their practical application in modern life. Explore ancient wisdom with contemporary relevance.",
      time: "Saturdays 4:00 PM",
      duration: "2 hours",
      participants: "All levels",
      level: "Interactive Discussion",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-teal-400 to-teal-600",
      features: ["Text study", "Group discussions", "Practical applications", "Take-home materials"]
    },
    {
      title: "Mindfulness Workshops",
      description: "Learn practical mindfulness techniques for stress reduction, emotional balance, and overall well-being in daily life.",
      time: "Monthly",
      duration: "3 hours",
      participants: "Beginners welcome",
      level: "Workshop Format",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      features: ["Stress reduction", "Emotional regulation", "Body awareness", "Practical exercises"]
    },
    {
      title: "Youth Sangha",
      description: "Special programs designed for young practitioners and students, combining traditional teachings with modern approaches.",
      time: "Sundays 3:00 PM",
      duration: "1.5 hours",
      participants: "Ages 12-25",
      level: "Youth Focused",
      icon: <Star className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
      features: ["Age-appropriate teachings", "Interactive activities", "Peer support", "Leadership development"]
    },
    {
      title: "Compassion Training",
      description: "Develop loving-kindness and compassion through structured practices and community service opportunities.",
      time: "Bi-weekly",
      duration: "2 hours",
      participants: "All welcome",
      level: "Heart-centered Practice",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
      features: ["Loving-kindness meditation", "Service projects", "Empathy building", "Community outreach"]
    },
    {
      title: "Advanced Retreat",
      description: "Intensive meditation retreats for experienced practitioners seeking deeper spiritual development and insight.",
      time: "Quarterly",
      duration: "3 days",
      participants: "Experienced only",
      level: "Advanced Practice",
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
      features: ["Silent retreat", "Intensive practice", "Personal guidance", "Deep contemplation"]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Programs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse range of spiritual programs designed to support your journey towards enlightenment, inner peace, and personal transformation.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-700"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${program.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${program.color} text-white`}>
                      {program.level}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{program.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-xl border border-gray-600">
                    <span className="text-gray-300 font-medium">Schedule:</span>
                    <span className="text-white font-semibold">{program.time}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-xl border border-gray-600">
                    <span className="text-gray-300 font-medium">Duration:</span>
                    <span className="text-white font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-xl border border-gray-600">
                    <span className="text-gray-300 font-medium">Participants:</span>
                    <span className="text-white font-semibold">{program.participants}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Program Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${program.color} text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-300`}>
                  Join Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our welcoming community and discover the transformative power of Buddhist practice. All programs are designed to accommodate practitioners at every level of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                Schedule a Visit
              </button>
              <button className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-black transform hover:scale-105 transition-all duration-300">
                Download Program Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;