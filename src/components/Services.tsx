import React from 'react';
import ServiceCard from './services/ServiceCard';
import { featuredServices } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div id="services" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our most popular business solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}