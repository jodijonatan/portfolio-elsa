import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Karya() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Website personal dengan React & Tailwind.",
      img: "https://via.placeholder.com/400x250?text=Project+1",
      link: "#",
    },
    {
      title: "Landing Page",
      desc: "Landing page startup modern.",
      img: "https://via.placeholder.com/400x250?text=Project+2",
      link: "#",
    },
    {
      title: "UI Design",
      desc: "Desain UI estetik dengan Figma.",
      img: "https://via.placeholder.com/400x250?text=Project+3",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center text-pink-600 mb-12"
      >
        ✨ Karyaku ✨
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-40">
              <div>
                <h3 className="text-xl font-semibold text-pink-500">
                  {p.title}
                </h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition"
              >
                Lihat Detail <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Karya;
