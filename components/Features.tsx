import React from 'react'
import { features } from '@/constants'

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Features