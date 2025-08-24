"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const profilePhotos = [
  "/images/foto-faris1.jpg", 
  "/images/foto-faris2.jpg", 
  "/images/foto-faris3.jpg", 
  "/images/foto-faris4.jpg", 
  "/images/foto-faris5.jpg", 
  "/images/foto-faris6.jpg", 
  "/images/foto-faris7.jpg", 
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kolom Teks (Kiri) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 mb-2 text-lg">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
            Faris Alfarizi.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
            I build things for the web.
          </h2>
          <p className="text-slate-400 max-w-lg leading-relaxed mb-8">
            I am an Informatics Engineering student with a deep passion for
            technology. My focus is on Full-Stack Development, where I enjoy
            bringing ideas to life, from elegant user interfaces to robust
            server-side logic. I am also deeply fascinated by the potential of
            AI and Data Science to solve complex problems.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#journey"
              className="inline-block px-8 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/10 transition-colors text-lg"
            >
              Explore My Journey
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/farisalfrz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/faris-alfarizi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/farisalfarizi__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://saweria.co/farisalfarizi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/saweria.png" 
                  alt="Saweria"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Kolom Foto (Kanan) */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 justify-self-center md:justify-self-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform rotate-3"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="w-full h-full rounded-lg"
            >
              {profilePhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={photo}
                    alt={`Foto Profil ${index + 1} [Your Name]`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
