import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-b from-pink-50 to-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-pink-600 mb-4"
      >
        Hubungi Aku
      </motion.h2>
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Punya pertanyaan, kolaborasi, atau sekadar mau menyapa? Jangan ragu
        untuk menghubungi aku lewat form ini ✨
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl space-y-5 border border-pink-100"
      >
        {/* Nama */}
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-pink-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Nama"
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-pink-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        {/* Pesan */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 text-pink-400 w-5 h-5" />
          <textarea
            placeholder="Pesan"
            rows="4"
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button className="w-full py-3 bg-pink-600 text-white font-medium rounded-xl shadow-md hover:bg-pink-700 transition-all">
          Kirim Pesan
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
