"use client";

import { motion } from "framer-motion";
import { journeyData } from "@/data/journey";
import JourneyItem from "./JourneyItem";

const Journey = () => {
  return (
    <section id="journey" className="py-16 md:py-24 overflow-hidden">
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center text-slate-100 mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h2>

      <div className="container mx-auto px-6">
        {/* Kontainer relatif sederhana untuk item-item timeline */}
        <div className="relative">
          {journeyData.map((item, index) => (
            <JourneyItem 
              key={item.id} 
              {...item} 
              index={index} 
              isLast={index === journeyData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;