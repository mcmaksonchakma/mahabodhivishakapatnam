import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const programs = [
    'Daily Meditation',
    'Dharma Study',
    'Mindfulness Workshops',
    'Youth Sangha'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Temple Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Mahabodhi Vizag</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A sanctuary of peace, wisdom, and spiritual growth in the heart of Vishakapatnam, serving the community since 1995.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Spreading compassion since 1995</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                  title={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to="/programs"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-left block"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Beach Road, Vishakapatnam<br />
                  Andhra Pradesh, India - 530003
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400 text-sm">+91 891-2345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">info@mahabodhivizag.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-8 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stay Connected</h4>
              <p className="text-gray-400 text-sm">Subscribe to receive updates about our programs and events</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-teal-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Mahabodhi Vishakapatnam. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for spiritual growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;