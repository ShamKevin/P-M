import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}