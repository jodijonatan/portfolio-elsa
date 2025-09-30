import React from "react";

// Komponen Card atau Section yang Lebih Menarik
const AboutCard = ({ icon, title, description }) => (
  <div className="p-6 md:p-8 bg-white border border-pink-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="text-3xl text-pink-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function About() {
  return (
    // Kontainer Utama: Background putih/sedikit pink muda untuk kontras yang elegan
    <div className="min-h-screen flex flex-col items-center pt-20 pb-12 bg-gray-50">
      {/* Header Utama */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 tracking-tight mb-4">
          Tentang Kami
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 font-light">
          Menciptakan pengalaman digital yang indah dan fungsional.
        </p>
        <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
      </header>

      {/* Konten Utama - Penekanan pada Profesionalitas */}
      <section className="max-w-6xl mx-auto px-6">
        {/* Ringkasan Profil */}
        <div className="p-8 md:p-12 bg-white rounded-2xl shadow-xl mb-12 border-t-4 border-pink-500">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Profil Singkat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed md:text-xl">
            Saya adalah seorang **Pengembang Web (Web Developer)** yang
            bersemangat, saat ini menempuh pendidikan di **SMK Jurusan Rekayasa
            Perangkat Lunak (RPL)**. Fokus utama saya adalah di **Frontend
            Development**, dengan keahlian mendalam pada ekosistem **React** dan
            desain antarmuka responsif menggunakan **Tailwind CSS**.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed italic">
            "Saya percaya bahwa kode yang baik harus menghasilkan produk yang
            tidak hanya berfungsi dengan sempurna, tetapi juga **menghadirkan
            estetika dan interaksi yang memukau**."
          </p>
        </div>

        {/* Keunggulan (Skills/Fokus) - Menggunakan Card Component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            icon="🚀"
            title="Frontend Mastery"
            description="Keahlian dominan dalam membangun User Interface (UI) yang modern, cepat, dan terukur dengan **React.js**."
          />

          <AboutCard
            icon="🎨"
            title="Desain Responsif & Estetik"
            description="Menciptakan tata letak (layout) yang adaptif di berbagai perangkat menggunakan **Tailwind CSS** untuk hasil visual yang menawan."
          />

          <AboutCard
            icon="💡"
            title="Inovasi & Pembelajaran"
            description="Selalu mencari teknologi dan pola desain terbaru untuk meningkatkan efisiensi dan kualitas proyek yang dikerjakan."
          />
        </div>
      </section>

      {/* Footer/CTA Sederhana */}
      <footer className="mt-16 text-center px-4">
        <p className="text-md text-gray-500">
          Tertarik untuk berkolaborasi dalam proyek Anda? Mari kita wujudkan ide
          Anda.
        </p>
        <a
          href="#contact"
          className="mt-3 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          Hubungi Saya
        </a>
      </footer>
    </div>
  );
}

export default About;
