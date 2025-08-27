"use client";

import { motion } from "framer-motion";
import type { JourneyItem as JourneyItemType } from "@/data/journey";

type JourneyItemProps = JourneyItemType & {
  index: number;
  isLast: boolean;
};

const JourneyItem = ({ year, title, description, index, isLast }: JourneyItemProps) => {
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isOdd ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="relative pl-12 md:pl-0">
      <div className={`absolute top-1 left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 z-10 -translate-x-1/2`}></div>
      {!isLast && (
        <div className="absolute top-1 left-4 md:left-1/2 w-0.5 h-full bg-slate-700 z-0 -translate-x-1/2"></div>
      )}

      <motion.div
        className={`pb-12 md:w-1/2 ${isOdd ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ y: -5, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }} 
      >
        <div className="rounded-lg border-2 border-slate-700 bg-slate-800 p-4 shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
          <p className="mb-1 font-semibold text-blue-500">{year}</p>
          <h3 className="text-base font-bold text-slate-100 md:text-lg">{title}</h3>
          <p className="mt-2 text-sm text-slate-300 md:text-base">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyItem;