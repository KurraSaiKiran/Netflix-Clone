import React from 'react';
import { Tv, Smartphone, Download, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Tv className="h-12 w-12" />,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  },
  {
    icon: <Download className="h-12 w-12" />,
    title: "Download your shows",
    description: "Save your favorites easily and always have something to watch offline."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Share with family",
    description: "Let family members watch on their own profiles with personalized recommendations."
  }
];

export default function Reasons() {
  return (
    <div className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          More Reasons to Join
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-[#132144] hover:bg-[#223362] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-netflix-red text-white mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}