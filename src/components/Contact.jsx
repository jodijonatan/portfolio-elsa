import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-white">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Hubungi Aku</h2>
      <form className="w-full max-w-md bg-pink-50 p-6 rounded-2xl shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="Pesan"
          rows="4"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400"
        ></textarea>
        <button className="w-full py-3 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default Contact;
