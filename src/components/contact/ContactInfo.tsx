import React from 'react';
import { Mail, MapPin, Trophy } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform">
          <Mail className="h-6 w-6 text-blue-600" />
          <span>powerrandmoneyy@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span>Tirupur, Coimbatore, India</span>
        </div>
        <div className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform">
          <Trophy className="h-6 w-6 text-blue-600" />
          <span>100+ Satisfied Clients</span>
        </div>
      </div>
    </div>
  );
}