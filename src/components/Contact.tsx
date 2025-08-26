"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        className="container mx-auto px-6 max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8">
          My inbox is always open. Whether you have a question, a project
          proposal, or just want to say hi, feel free to reach out via email or
          connect with me on Instagram or LinkedIn. I will do my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 mb-12">
          <a
            href="mailto:faris.alfarizi109@gmail.com"
            className="flex items-center text-lg text-slate-300 hover:text-blue-500 transition-colors duration-300 font-mono"
          >
            <FiMail className="mr-3" size={22} />
            <span>faris.alfarizi109@gmail.com</span>
          </a>
        </div>

        {/* Bagian Saweria */}
        <div className="mt-8">
          <p className="text-slate-300 mb-4">
            Like what I do? Support my work via Saweria!
          </p>
          <a
            href="https://saweria.co/farisalfarizi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-bold"
          >
            <span className="relative w-6 h-6 mr-3">
              <Image
                src="/images/saweria.png"
                alt="Saweria Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
            Support Me
          </a>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Contact;
