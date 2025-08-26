"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { motion } from 'framer-motion';

const hobbiesData = [
  {
    name: 'Basketball',
    images: ['/images/hobbies/basketball/1.jpg', '/images/hobbies/basketball/2.jpg', 
            '/images/hobbies/basketball/3.jpg', '/images/hobbies/basketball/4.jpg', 
            '/images/hobbies/basketball/5.jpg', '/images/hobbies/basketball/6.jpg', 
            '/images/hobbies/basketball/7.jpg',], 
  },
  {
    name: 'Running',
    images: ['/images/hobbies/running/1.jpg', '/images/hobbies/running/2.jpg', 
            '/images/hobbies/running/3.jpg', '/images/hobbies/running/4.jpg',
             '/images/hobbies/running/5.jpg',], 
  },
  {
    name: 'Swimming',
    images: ['/images/hobbies/swimming/1.jpg', '/images/hobbies/swimming/2.jpg',
            '/images/hobbies/swimming/3.jpg', '/images/hobbies/swimming/4.jpg',
             '/images/hobbies/swimming/5.jpg', '/images/hobbies/swimming/6.jpg',
             '/images/hobbies/swimming/7.jpg',],
  },
  {
    name: 'Pool',
    images: ['/images/hobbies/billiard/1.jpg', '/images/hobbies/billiard/2.jpg',
            '/images/hobbies/billiard/3.jpg', '/images/hobbies/billiard/4.jpg',
            '/images/hobbies/billiard/5.jpg', '/images/hobbies/billiard/6.jpg',
            '/images/hobbies/billiard/7.jpg', '/images/hobbies/billiard/8.jpg',
            '/images/hobbies/billiard/9.jpg', '/images/hobbies/billiard/10.jpg',], 
  },
  {
    name: 'Photography',
    images: ['/images/hobbies/photography/1.jpg', '/images/hobbies/photography/2.jpg',
            '/images/hobbies/photography/3.jpg', '/images/hobbies/photography/4.jpg',
            '/images/hobbies/photography/5.jpg', '/images/hobbies/photography/6.jpg',
            '/images/hobbies/photography/7.jpg', '/images/hobbies/photography/8.jpg',
            '/images/hobbies/photography/9.jpg', '/images/hobbies/photography/10.jpg',
            '/images/hobbies/photography/11.jpg',],
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 text-center">
          My Hobbies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 w-full sm:w-[45%] md:w-[40%] lg:w-[22%] cursor-pointer
              transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.3 }} 
              whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.2)", transition: { duration: 0.1, ease: "easeOut" } }} 
              style={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }} 
            >
              <h3 className="text-xl font-semibold text-slate-300 p-4 border-b border-slate-700 text-center">
                {hobby.name}
              </h3>
              <div className="h-72 relative">
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  className="h-full w-full"
                >
                  {hobby.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative h-full w-full">
                        <Image src={image} alt={hobby.name} layout="fill" objectFit="cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                  {hobby.images.length > 1 && (
                    <div className="swiper-pagination" />
                  )}
                </Swiper>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hobbies;