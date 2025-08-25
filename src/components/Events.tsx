"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { eventsData } from '@/data/events';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';

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

const Events = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          onMouseEnter={() => swiperRef.current?.swiper.autoplay.start()}
          onMouseLeave={() => swiperRef.current?.swiper.autoplay.stop()}
        >
          Tech Events I Have Attended
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          {eventsData.map((event,) => (
            <motion.div
              key={event.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 w-full md:w-[48%]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-full h-56">
                <Swiper
                  ref={swiperRef}
                  modules={[Pagination, Navigation, Autoplay]}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={event.imageUrls.length > 1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="w-full h-full"
                >
                  {event.imageUrls.map((url, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={url}
                        alt={`Photo ${i + 1} from ${event.title}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-sm text-blue-400 font-semibold mb-1">
                  {event.date} • {event.location}
                </p>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {event.description}
                </p>
                {event.highlights && (
                  <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                    {event.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
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

export default Events;