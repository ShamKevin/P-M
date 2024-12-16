import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({ icon: Icon, title, description, slug }: ServiceCardProps) {
  return (
    <Link to={`/services/${slug}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
        <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
          <Icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
}