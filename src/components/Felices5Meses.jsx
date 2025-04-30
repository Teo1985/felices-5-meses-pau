import React, { useEffect } from "react";
import "../styles/corazones.css";

export default function Felices5Meses() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 4 + "s";
      heart.style.backgroundColor = [
        "#e11d48",
        "#ec4899",
        "#f43f5e"
      ][Math.floor(Math.random() * 3)];
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    };

    const interval = setInterval(createHeart, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-pink-100 to-pink-300 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-700 drop-shadow-xl mb-6 transition-transform duration-300 hover:scale-110 hover:text-rose-600 animate-pulse">
        Felices 5 meses, Pau 💖
      </h1>
      <p className="text-xl md:text-2xl text-pink-800 max-w-2xl leading-relaxed transition-transform duration-300 hover:scale-105">
        Gracias por llenar mi vida de amor, luz y alegría. <br />
        Eres lo mejor que me ha pasado y no puedo esperar a compartir muchos meses más contigo. 💕
      </p>
    </div>
  );
}
