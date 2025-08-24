"use client";

import React, { useState } from 'react'; 
import Image from 'next/image'; 
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, certifications } from '@/data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};


const Skills = () => {
  // State untuk menyimpan URL gambar sertifikat yang sedang dipilih (untuk lightbox)
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Tech Stack
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-full sm:w-5/12 md:w-1/3 lg:w-[30%]"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <skill.icon className="text-blue-500 mr-3 text-xl" />
                    <span className="text-slate-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12 mt-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Certifications
          </motion.h2>

          <div className="w-full">
            <ul className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700 w-full md:w-[45%] lg:w-[40%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: false }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-slate-100">{cert.name}</h4>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline shrink-0 ml-4">
                      View
                    </a>
                  </div>
                  <div 
                    className="cursor-pointer group"
                    onClick={() => setSelectedCert(cert.imageUrl)}
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={`Certificate for ${cert.name}`}
                      width={1280}
                      height={720}
                      className="rounded-md w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lightbox Modal untuk menampilkan gambar saat di-klik */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <Image
                src={selectedCert}
                alt="Selected Certificate"
                width={1920}
                height={1080}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;