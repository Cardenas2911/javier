import React, { useState } from "react";

const CategoryIcons = {
  "¿Qué herramientas de edición uso?": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ef4444] h-6 w-6 opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mi Proceso Creativo": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ef4444] h-6 w-6 opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Psicología de la Viralidad": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ef4444] h-6 w-6 opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "¿Cómo entrego los proyectos?": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ef4444] h-6 w-6 opacity-70"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
    </svg>
  )
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Qué herramientas de edición uso?": [
      "Trabajo principalmente con Adobe Premiere Pro CC, After Effects CC, Photoshop CC, Illustrator CC, CapCut Pro y herramientas profesionales de Inteligencia Artificial para el mejoramiento de audio, reducción de ruido y la generación selectiva de B-Roll cinematográfico."
    ],
    "Mi Proceso Creativo": [
      "Tengo un workflow sumamente estructurado para garantizar el éxito y la retención del video: primero diseñamos el gancho neuro-visual inicial de 3 segundos, realizamos cortes dinámicos con cero silencios, inyectamos efectos de sonido inmersivos (sound design), complementamos con B-roll y aplicamos la colorización de grado cinematográfico."
    ],
    "Psicología de la Viralidad": [
      "No edito al azar. Estructuro el video basándome en resets de atención cada 2.5 o 3 segundos (cambios de plano, zooms progresivos, efectos de sonido de barrido y subtítulos cinéticos vibrantes) para maximizar la tasa de finalización y el engagement del algoritmo de TikTok, Reels y YouTube Shorts."
    ],
    "¿Cómo entrego los proyectos?": [
      "Utilizo plataformas colaborativas como Frame.io o Google Drive en alta definición. Esto permite al cliente realizar correcciones y comentarios directamente sobre el timeline segundo a segundo, logrando un proceso de revisión y aprobación ultra ágil."
    ]
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#8c0303]">
          Preguntas Frecuentes
        </h2>
        <ul className="mt-8 space-y-4 text-lg drop-shadow-[2px_2px_0_#8c0303]">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#8c0303] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#ef4444] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[0.9em] text-gray-300 font-semibold p-2 leading-relaxed">
                    {skills[category]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
