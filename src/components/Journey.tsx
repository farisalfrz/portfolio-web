import React from 'react';
import { journeyData } from '@/data/journey';
import JourneyItem from './JourneyItem';

const Journey = () => {
  return (
    <section id="journey" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16">
          My Journey
        </h2>
        <div className="relative wrap overflow-hidden">
          {/* Garis vertikal di tengah */}
          <div className="border-2-2 absolute border-opacity-20 border-slate-600 h-full border" style={{ left: '50%' }}></div>
          
          {/* Mapping data perjalanan */}
          {journeyData.map((item, index) => (
            <JourneyItem key={item.id} {...item} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-100">The Journey Continues...</h3>
        </div>
      </div>
    </section>
  );
};

export default Journey;