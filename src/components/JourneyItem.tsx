"use client";

import { motion } from "framer-motion";
import type { JourneyItem as JourneyItemType } from "@/data/journey";

// Menambahkan 'index' sebagai properti baru untuk menentukan posisi (kiri/kanan)
type JourneyItemProps = JourneyItemType & {
  index: number;
};

const JourneyItem = ({ year, title, description, index }: JourneyItemProps) => {
  const isOdd = index % 2 !== 0; // Cek apakah index ganjil

  const variants = {
    hidden: { opacity: 0, x: isOdd ? 100 : -100 }, // Mulai dari kanan jika ganjil, dari kiri jika genap
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="relative mb-8 flex items-center justify-between w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
    >
      <div className={`hidden md:block w-5/12`}></div>
      <div className="z-20 flex items-center bg-blue-400 shadow-xl w-8 h-8 rounded-full">
        <div className="w-8 h-1 bg-slate-600"></div>
      </div>
      <motion.div
      className={`bg-slate-800 border-2 border-slate-700 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${isOdd ? "md:ml-auto" : "md:mr-auto"
      }`}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-blue-500 mb-1 font-semibold">{year}</p>
        <h3 className="font-bold text-lg text-slate-100">{title}</h3>
        <p className="mt-2 text-slate-300 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default JourneyItem;