import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">Lumi</h2>
            <p className="text-sm">
              Illuminating the path to digital excellence through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Services</a></li>
              <li><a href="#" className="hover:text-orange-500">Projects</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Web Development</a></li>
              <li><a href="#" className="hover:text-orange-500">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-orange-500">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@lumi.com
              </p>
              <p>123 Tech Street</p>
              <p>Digital City, DC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Lumi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-orange-500">Terms of Service</a>
              <a href="#" className="text-sm hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;