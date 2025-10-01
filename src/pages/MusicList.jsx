import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

// Komponen Card Musik
const MusicCard = ({ title, artist, audioSrc, image }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col">
      {/* Cover Lagu */}
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Info Lagu */}
      <h3 className="text-lg font-semibold text-pink-600">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{artist}</p>

      {/* Tombol Play */}
      <div className="mt-auto flex items-center justify-between">
        <button
          onClick={togglePlay}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-5 rounded-full shadow transition text-sm"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

function MusicList() {
  const musics = [
    {
      title: "Diva",
      artist: "Beyoncé",
      audioSrc: "/music/diva.mp3",
      image: "/covers/diva.jpg",
    },
    {
      title: "Bad Girls",
      artist: "M.I.A.",
      audioSrc: "/music/badgirls.mp3",
      image: "/covers/badgirls.jpg",
    },
    {
      title: "Criminal",
      artist: "Britney Spears",
      audioSrc: "/music/criminal.mp3",
      image: "/covers/criminal.jpg",
    },
    {
      title: "Kita",
      artist: "Shilla On 7",
      audioSrc: "/music/kita.mp3",
      image: "/covers/kita.jpg",
    },
    {
      title: "Peradaban",
      artist: "Feast",
      audioSrc: "/music/peradapan.mp3",
      image: "/covers/peradapan.jpg",
    },
    {
      title: "Soeked",
      artist: "Shy Smith",
      audioSrc: "/music/soaked.mp3",
      image: "/covers/soaked.jpg",
    },
    {
      title: "Tarot",
      artist: "Feast",
      audioSrc: "/music/tarot.mp3",
      image: "/covers/tarot.jpg",
    },
    {
      title: "The Box",
      artist: "Roddy Ricch",
      audioSrc: "/music/thebox.mp3",
      image: "/covers/thebox.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center pt-20 pb-16 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-3">
          Musik Favorit Saya
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Kumpulan lagu-lagu yang selalu menemani saya, memberikan inspirasi dan
          suasana hati yang indah.
        </p>
        <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
      </header>

      {/* Daftar Musik */}
      <section className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musics.map((music, index) => (
            <MusicCard
              key={index}
              title={music.title}
              artist={music.artist}
              audioSrc={music.audioSrc}
              image={music.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MusicList;
