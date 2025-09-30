import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-white px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl font-extrabold text-pink-600 mb-4">
          Halo, Aku{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Elsa 🌸
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Seorang{" "}
          <span className="font-semibold text-pink-600">
            Frontend Developer
          </span>
          yang suka membangun website dengan desain
          <span className="italic"> estetik</span>,
          <span className="italic"> interaktif</span>, dan
          <span className="italic"> menarik</span>.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#karya"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-medium rounded-2xl shadow-lg hover:bg-pink-700 transition-all"
          >
            Lihat Karyaku
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-16 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Home;
