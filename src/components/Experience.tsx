"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { FaAngleRight } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);
  const activeExperience = experienceData.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          My Experiences
        </motion.h2>

        <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
          {/* Tombol Tab di samping (sudah diperbaiki) */}
          <div className="flex border-b-2 border-slate-700 md:border-b-0 md:border-r-2 md:border-slate-700 md:flex-col mb-8 md:mb-0 md:mr-8">
            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`relative text-left px-4 py-3 text-sm transition-colors duration-300 w-full md:w-48 ${
                  activeTab === exp.id ? 'text-blue-500' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'
                }`}
              >
                {exp.company}
                {activeTab === exp.id && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 md:bottom-auto md:top-0 md:right-[-2px] h-0.5 md:h-full w-full md:w-0.5 bg-blue-500"
                    layoutId="active-tab-indicator"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Konten dari Tab yang Aktif */}
          <div className="relative w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeExperience && (
                <motion.div
                  key={activeExperience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold text-slate-100">
                    {activeExperience.role} <span className="text-blue-500">@ {activeExperience.company}</span>
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 mb-6">{activeExperience.period}</p>
                  <ul className="space-y-3">
                    {activeExperience.description.map((point, index) => (
                      <li key={index} className="flex">
                        <FaAngleRight className="text-blue-500 mr-2 mt-1 shrink-0" />
                        <span className="text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;