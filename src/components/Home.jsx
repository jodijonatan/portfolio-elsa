import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-pink-600"
      >
        Halo, Aku Elsa 🌸
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 max-w-md text-center">
        Aku seorang Frontend Developer yang suka membuat website dengan desain
        estetik, interaktif, dan menarik.
      </p>
      <a
        href="#karya"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-2xl shadow-lg hover:bg-pink-600 transition"
      >
        Lihat Karyaku
      </a>
    </div>
  );
}

export default Home;
