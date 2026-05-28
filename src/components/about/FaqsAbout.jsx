import React, { useState } from "react";

const QuestionIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#ef4444] h-6 w-6 opacity-80"
  >
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM12 6C13.933 6 15 7.067 15 9C15 10.117 14.183 11.233 13.5 12H11.5L12 11C12.833 10.333 13 10 13 9C13 8 12.5 7.5 12 7.5C11.5 7.5 11 8 11 9H9C9 7.067 10.067 6 12 6Z"></path>
  </svg>
);

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Cuál es mi filosofía de edición?": [
      "Bajo la Metodología Kintsugi, consideramos que las tomas brutas son materia prima valiosa que, al unirse con técnicas de narración de alta retención, se convierten en obras de arte de alta conversión. No solo cortamos video, esculpimos retención."
    ],
    "Mi método para vencer el scroll en 3 segundos": [
      "Implementamos ganchos neuro-visuales personalizados para cada nicho. Esto incluye efectos sonoros de alto contraste, cortes ultra-rápidos sin silencios y subtítulos dinámicos de estilo kinetic para capturar el foco cerebral del espectador de inmediato."
    ],
    "¿Cómo es mi proceso de postproducción?": [
      "Es sumamente organizado: definimos el ritmo y el tono según el público objetivo, aplicamos corrección de color (Color Grading) cinemática, integramos diseño sonoro envolvente (SFX) y animaciones 2D clave. Cada pieza pasa por un riguroso control de calidad antes de la entrega."
    ],
    "¿Por qué el formato vertical (9:16) es vital hoy?": [
      "El video corto de 9:16 es el vehículo más rápido y de mayor alcance orgánico para posicionar tu marca personal en piloto automático. Con la Línea de Viralidad Kintsugi, nos aseguramos de que tu marca inunde las redes sociales con autoridad y consistencia."
    ],
    "¿Cómo trabajamos en la suite cinematográfica (16:9)?": [
      "Para videos largos, vlogs y cursos, aplicamos un enfoque documental premium. Estructuramos la narrativa basada en 'el camino del héroe', alternando tomas A-Roll y B-Roll dinámicas con diseño acústico avanzado para mantener al espectador pegado a la pantalla."
    ]
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center text-left mx-auto max-w-6xl px-4">
      <div className="site-container mt-10 w-full">
        <h2 class="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-end">
          <span class="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#ef4444] bg-red-650 md:block"></span>
          <span class="drop-shadow-[2px_2px_0_#8c0303]">Preguntas Frecuentes</span>
        </h2>
        <ul className="mt-8 space-y-4 text-lg w-full">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 border border-gray-800 hover:border-gray-700/60 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all drop-shadow-[2px_2px_0_#8c0303]"
              >
                <div className="flex items-center gap-3 p-4">
                  {QuestionIcon}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[240px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#ef4444] font-bold">
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
                  <p className="text-[0.9em] text-gray-300 font-semibold p-2 leading-relaxed">{skills[category]}</p>
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
