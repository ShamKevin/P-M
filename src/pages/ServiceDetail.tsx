import React from 'react';
import { useParams } from 'react-router-dom';
import { allServices } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-blue-50 p-3 rounded-lg">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg text-gray-600 whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>
          <div className="space-y-6">
            {service.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${service.title} ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}