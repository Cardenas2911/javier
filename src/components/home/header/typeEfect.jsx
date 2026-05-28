import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-2xl md:text-4xl font-black text-[#ef4444] uppercase tracking-wide">
      <Typewriter
        options={{
          strings: [
            "Editor de Video Cinemático",
            "Estratega de Viralidad",
            "Creador de Alto Impacto",
            "Retención Neuro-Visual"
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
