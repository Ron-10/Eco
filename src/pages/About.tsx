import React from 'react';
import { TreePine, Users, Building2, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <Globe className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            UrjaTech empowers individuals to reduce their carbon footprint through gamified rewards,
            making sustainability accessible and engaging for everyone.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, label: 'Active Users', value: '10,000+' },
              { icon: TreePine, label: 'Trees Planted', value: '5,000+' },
              { icon: Building2, label: 'Partner Organizations', value: '50+' },
              { icon: Globe, label: 'CO₂ Reduced (tons)', value: '1,000+' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow px-6 py-8 text-center">
                <stat.icon className="mx-auto h-8 w-8 text-green-500" />
                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <div className="prose prose-green max-w-none">
                <p className="text-gray-500">
                  Founded in 2025, UrjaTech emerged from a simple idea: make environmental 
                  sustainability rewarding and accessible to everyone. We believe that small 
                  actions, when multiplied by millions of people, can transform the world.
                </p>
                <p className="text-gray-500 mt-4">
                  Our platform combines cutting-edge technology with behavioral science to help 
                  individuals and communities track, reduce, and offset their carbon footprint 
                  while earning rewards for their positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              'Nepal Electricity Authority',
              'Alternative Energy Promotion Center',
              'Kathmandu Metropolitan City',
              'Clean Energy Nepal',
            ].map((partner, index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center items-center bg-white rounded-lg shadow py-8 px-4"
              >
                <p className="text-center font-medium text-gray-600">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-green-50 rounded-lg shadow-sm px-6 py-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Get in Touch</h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Want to learn more about how UrjaTech can help your community reduce its carbon 
              footprint? We'd love to hear from you.
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
