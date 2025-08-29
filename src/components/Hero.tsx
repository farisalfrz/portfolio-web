"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const profilePhotos = [
  "/images/foto-faris1.jpg",
  "/images/foto-faris2.jpg",
  "/images/foto-faris3.jpg",
  "/images/foto-faris4.jpg",
  "/images/foto-faris5.jpg",
  "/images/foto-faris6.jpg",
  "/images/foto-faris7.jpg",
];

const myName = "Faris Alfarizi.".split("");

const containerVariants = {
  initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  hover: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
};

const letterVariants = {
  initial: { y: 0, color: "#e2e8f0" },
  hover: { y: -10, color: "#3b82f6" },
};

const Hero = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await controls.start("hover");
      await controls.start("initial");
    };
    sequence();
  }, [controls]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-15 md:pt-0">
      {/* Kontainer utama */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        {/* Kolom Teks (Kiri di desktop, Bawah di mobile) */}
        <motion.div
          className="w-full order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 text-lg mb-4">Hi, my name is</p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-4 py-2 flex flex-wrap justify-center md:justify-start cursor-pointer"
            variants={containerVariants}
            animate={controls}
            initial="initial"
            whileHover="hover"
            aria-label="Faris Alfarizi."
          >
            {myName.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400 mb-6">
            I bring ideas to life with modern technology.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
            I am an Informatics Engineering student with a deep passion for
            technology. My focus is on Full-Stack Development, where I enjoy
            bringing ideas to life, from elegant user interfaces to robust
            server-side logic. I am also deeply fascinated by the potential of
            AI and Data Science to solve complex problems.
          </p>
          <div className="flex items-center space-x-6 justify-center md:justify-start">
            <a
              href="#journey"
              className="inline-block px-3 md:px-8 py-1.5 md:py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/10 transition-colors text-sm md:text-lg"
            >
              Explore My Journey
            </a>
            <a
              href="/Faris-Alfarizi-CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 md:px-8 py-1.5 md:py-3 border border-slate-500 text-slate-300 rounded-md hover:bg-slate-700/50 transition-colors text-sm md:text-lg"
            >
              Download CV
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

        {/* Kolom Foto (Kanan di desktop, Atas di mobile) */}
        <motion.div
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto md:mx-0 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform rotate-3"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full h-full rounded-lg"
            >
              {profilePhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={photo}
                    alt={`Foto Profil ${index + 1} Faris Alfarizi`}
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
