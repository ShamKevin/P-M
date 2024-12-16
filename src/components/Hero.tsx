import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';
import JoinUsButton from './buttons/JoinUsButton';

export default function Hero() {
  return (
    <div id="home" className="hero-gradient pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Transform Your <span className="gradient-text">Business</span> with Strategic Solutions
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up max-w-lg">
              P&M Info-Solutions empowers businesses through innovative marketing strategies and comprehensive sales solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <JoinUsButton className="text-lg px-8 py-4" />
              <button className="text-lg px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl transform -rotate-12"></div>
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              alt="Marketing strategy meeting"
              className="relative rounded-2xl shadow-2xl animate-float"
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Data-Driven Growth',
              description: 'Strategic decisions backed by analytics'
            },
            {
              icon: Target,
              title: 'Targeted Approach',
              description: 'Reach your ideal customers effectively'
            },
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Dedicated professionals at your service'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-xl card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}