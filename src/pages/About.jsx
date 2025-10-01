import React from "react";
import main from "../assets/main.jpeg";

const AboutCard = ({ icon, title, description }) => (
  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-16 pb-12 bg-gray-50">
      {/* Header */}
      <header className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Tentang Saya
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Membangun pengalaman membaca yang estetik, menarik, dan mendalam.
        </p>
      </header>

      {/* Profil */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-12">
        {/* Foto */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <img
              src={main}
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Profil Singkat
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Saya seorang{" "}
            <span className="font-semibold text-gray-800">Penulis Novel</span>{" "}
            dengan fokus pada{" "}
            <span className="font-semibold text-gray-800">
              Penulisan Kreatif
            </span>
            . Berpengalaman menggunakan{" "}
            <span className="font-semibold text-gray-800">
              Picsart, Ibis Paint, Pinterest, Artflow
            </span>{" "}
            dan <span className="font-semibold text-gray-800">CapCut</span>{" "}
            untuk membangun pengalaman membaca yang menarik, estetik, dan
            mendalam.
          </p>
          <p className="mt-4 text-gray-500 italic">
            "Membawa cerita hidup melalui kata-kata."
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            icon="🚀"
            title="Picsart & Ibis Paint"
            description="bikin foto/video jadi lebih estetik, kreatif, dan siap diposting di media sosial."
          />
          <AboutCard
            icon="🎨"
            title="Pinterest & Artflow"
            description="menemukan, menyimpan, dan mengatur ide dalam bentuk gambar atau video biar gampang dicari lagi."
          />
          <AboutCard
            icon="💡"
            title="Capcut"
            description="bikin video estetik dan siap upload ke TikTok, Instagram, atau YouTube dengan cepat."
          />
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-16 text-center px-4">
        <p className="text-gray-600">
          Tertarik untuk berkolaborasi? Mari wujudkan ide Anda.
        </p>
        <a
          href="#contact"
          className="mt-3 inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Hubungi Saya
        </a>
      </footer>
    </div>
  );
}

export default About;
