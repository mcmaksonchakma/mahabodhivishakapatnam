import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Mahabodhi Temple Complex", "Beach Road, Vishakapatnam", "Andhra Pradesh, India - 530003"],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 891-2345678", "+91 9876543210"],
      color: "text-teal-400",
      bgColor: "bg-teal-500/10"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@mahabodhivizag.org", "programs@mahabodhivizag.org"],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Temple Hours",
      details: ["Monday - Sunday: 5:00 AM - 9:00 PM", "Office Hours: 9:00 AM - 6:00 PM"],
      color: "text-pink-400",
      bgColor: "bg-pink-500/10"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Visit",
      description: "Plan your visit to our temple",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Programs",
      description: "Enroll in our spiritual programs",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Ask Questions",
      description: "Get answers about Buddhism",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">With Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We welcome visitors, practitioners, and seekers from all backgrounds. Reach out to learn more about our programs or to plan your visit to our spiritual sanctuary.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`p-6 bg-gradient-to-r ${action.color} rounded-2xl text-white hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 text-left`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{action.title}</h3>
                    <p className="text-white/80 text-sm">{action.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl ${info.bgColor} border border-gray-600`}>
                      <div className={`${info.color} mt-1`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl h-64 flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-white font-medium">Interactive Map</p>
                  <p className="text-gray-400">Temple Location & Directions</p>
                  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-full text-sm font-semibold hover:from-orange-600 hover:to-teal-700 transition-all duration-300">
                    Open in Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors duration-300 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-colors duration-300 outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-300 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-colors duration-300 outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="meditation">Meditation Classes</option>
                    <option value="events">Event Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors duration-300 outline-none resize-none"
                    placeholder="Tell us how we can help you on your spiritual journey..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/25"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Questions</span>
            </h2>
            <p className="text-gray-400">Quick answers to common questions about visiting our temple</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need to register for meditation sessions?",
                answer: "No registration needed for daily sessions. Just arrive 10 minutes early."
              },
              {
                question: "What should I wear when visiting?",
                answer: "Modest, comfortable clothing. Remove shoes before entering prayer halls."
              },
              {
                question: "Are there programs for beginners?",
                answer: "Yes! We welcome beginners and offer introductory programs every week."
              },
              {
                question: "Is there parking available?",
                answer: "Yes, we have free parking available for visitors and program participants."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <h4 className="font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;