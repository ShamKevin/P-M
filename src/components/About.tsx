import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">About P&M Info-Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Transforming businesses through innovative marketing and sales solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Founded with a vision to revolutionize the marketing and sales landscape, P&M Info-Solutions has grown into a trusted partner for businesses seeking growth and innovation. Our journey began with a simple mission: to deliver exceptional results through data-driven strategies and personalized solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Excellence</h3>
            <p className="mt-2 text-gray-600">Committed to delivering outstanding results</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Precision</h3>
            <p className="mt-2 text-gray-600">Data-driven strategies for optimal outcomes</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="mt-2 text-gray-600">Strong partnerships with our clients</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Innovation</h3>
            <p className="mt-2 text-gray-600">Cutting-edge solutions for modern challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
}