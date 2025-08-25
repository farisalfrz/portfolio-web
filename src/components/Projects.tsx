"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Projects = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          I Have Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden group border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => swiperRef.current?.autoplay.start()}
              onMouseLeave={() => swiperRef.current?.autoplay.stop()}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Swiper
                  ref={swiperRef}
                  modules={[Pagination, Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={project.imageUrls.length > 1}
                  autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true, 
                  }}
                  className="w-full h-full"
                >
                  {project.imageUrls.map((url, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={url}
                        alt={`Screenshot ${i + 1} of ${project.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-700/50">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-500 transition-colors duration-300 flex items-center"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-500 transition-colors duration-300 flex items-center"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6 !important; /* Warna biru (blue-500) */
        }
        .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important; /* Warna biru (blue-500) */
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 24px !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;