import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

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
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow transition flex items-center justify-center"
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

export default MusicCard;
