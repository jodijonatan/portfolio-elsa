import React from "react";

function Karya() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Website personal dengan React & Tailwind.",
      img: "https://via.placeholder.com/400x250?text=Project+1",
    },
    {
      title: "Landing Page",
      desc: "Landing page startup modern.",
      img: "https://via.placeholder.com/400x250?text=Project+2",
    },
    {
      title: "UI Design",
      desc: "Desain UI estetik dengan Figma.",
      img: "https://via.placeholder.com/400x250?text=Project+3",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
        ✨ Karyaku ✨
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-500">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Karya;
