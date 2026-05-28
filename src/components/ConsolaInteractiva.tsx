import React, { useState, useMemo } from 'react';

// Interfaz para definir el estado de un pilar tecnológico
interface PilarEstado {
  nombre: string;
  abreviatura: string;
  nivel: number;
  color: string;
  descripcion: string;
}

export default function ConsolaInteractiva() {
  // Inicializamos el nivel de los 4 pilares MAES (de 0 a 100)
  const [modularidad, establecerModularidad] = useState<number>(85);
  const [altoRendimiento, establecerAltoRendimiento] = useState<number>(90);
  const [estructuraLimpia, establecerEstructuraLimpia] = useState<number>(75);
  const [seguridadEstricta, establecerSeguridadEstricta] = useState<number>(80);

  // Pilar seleccionado para mostrar detalles en la consola
  const [pilarSeleccionado, establecerPilarSeleccionado] = useState<string>('M');

  // Calcular la puntuación total ponderada de la Metodología MAES
  const puntuacionTotal = useMemo(() => {
    const total = (modularidad + altoRendimiento + estructuraLimpia + seguridadEstricta) / 4;
    return Math.round(total);
  }, [modularidad, altoRendimiento, estructuraLimpia, seguridadEstricta]);

  // Lista de pilares mapeados para renderizar en el panel de control
  const pilares: PilarEstado[] = [
    {
      nombre: 'Modularidad (Componentes)',
      abreviatura: 'M',
      nivel: modularidad,
      color: 'from-indigo-500 to-indigo-600 shadow-indigo-500/25',
      descripcion: 'Separa la lógica de negocio y la interfaz en componentes atómicos. Facilita la reutilización y las pruebas unitarias.',
    },
    {
      nombre: 'Alto Rendimiento',
      abreviatura: 'A',
      nivel: altoRendimiento,
      color: 'from-cyan-400 to-cyan-500 shadow-cyan-500/25',
      descripcion: 'Carga instantánea de páginas. Astro renderiza HTML estático por defecto, enviando JavaScript solo cuando es necesario mediante islas.',
    },
    {
      nombre: 'Estructura Limpia',
      abreviatura: 'E',
      nivel: estructuraLimpia,
      color: 'from-purple-500 to-purple-600 shadow-purple-500/25',
      descripcion: 'Estructura jerárquica limpia con flujos de datos unidereccionales claros. Facilita el mantenimiento a gran escala y la colaboración.',
    },
    {
      nombre: 'Seguridad y Robustez',
      abreviatura: 'S',
      nivel: seguridadEstricta,
      color: 'from-emerald-400 to-emerald-500 shadow-emerald-500/25',
      descripcion: 'Garantiza la inmutabilidad de los datos, tipado estricto en TypeScript y protección contra fallos inesperados en el cliente.',
    },
  ];

  // Obtener los datos del pilar actualmente seleccionado en detalle
  const pilarDetalle = useMemo(() => {
    return pilares.find(p => p.abreviatura === pilarSeleccionado) || pilares[0];
  }, [pilares, pilarSeleccionado]);

  // Determinar la etiqueta de rendimiento según la puntuación
  const obtenerEtiquetaRendimiento = (puntuacion: number) => {
    if (puntuacion >= 90) return { texto: 'Clase Mundial', color: 'text-cyan-400' };
    if (puntuacion >= 80) return { texto: 'Excelente', color: 'text-indigo-400' };
    if (puntuacion >= 70) return { texto: 'Buen Estado', color: 'text-emerald-400' };
    return { texto: 'Requiere Optimización', color: 'text-amber-400' };
  };

  const etiquetaActual = obtenerEtiquetaRendimiento(puntuacionTotal);

  return (
    <div 
      className="w-full max-w-5xl mx-auto rounded-3xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden"
      data-sujeto="SimuladorMAES"
      data-predicado="evaluaArquitectura"
      data-objeto="MadurezMetricas"
    >
      {/* Luces decorativas de fondo */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lado izquierdo: Control de Pilares */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white font-mono">Consola de Simulación MAES</h3>
            <p className="text-gray-400 text-sm mt-1">Ajusta los niveles dinámicamente y analiza el impacto en el rendimiento global del software.</p>
          </div>

          <div className="space-y-5">
            {/* Control Modularidad (M) */}
            <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700/60 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold font-mono">M</span>
                  Modularidad
                </label>
                <span className="text-sm font-bold text-indigo-300">{modularidad}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={modularidad}
                onChange={(evento) => establecerModularidad(Number(evento.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none"
              />
            </div>

            {/* Control Alto Rendimiento (A) */}
            <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700/60 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-bold font-mono">A</span>
                  Alto Rendimiento
                </label>
                <span className="text-sm font-bold text-cyan-300">{altoRendimiento}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={altoRendimiento}
                onChange={(evento) => establecerAltoRendimiento(Number(evento.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            {/* Control Estructura Limpia (E) */}
            <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700/60 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold font-mono">E</span>
                  Estructura Limpia
                </label>
                <span className="text-sm font-bold text-purple-300">{estructuraLimpia}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={estructuraLimpia}
                onChange={(evento) => establecerEstructuraLimpia(Number(evento.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
              />
            </div>

            {/* Control Seguridad (S) */}
            <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700/60 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold font-mono">S</span>
                  Seguridad y Robustez
                </label>
                <span className="text-sm font-bold text-emerald-300">{seguridadEstricta}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={seguridadEstricta}
                onChange={(evento) => establecerSeguridadEstricta(Number(evento.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Lado derecho: Métricas Visuales e Información */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tarjeta de Calificación Global */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Puntuación MAES</span>
            
            {/* Círculo de Carga Porcentual */}
            <div className="relative w-36 h-36 flex items-center justify-center my-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="62"
                  className="stroke-gray-800 fill-none"
                  strokeWidth="8"
                />
                <circle
                  cx="72"
                  cy="72"
                  r="62"
                  className="stroke-indigo-500 transition-all duration-300 ease-out fill-none"
                  strokeWidth="8"
                  strokeDasharray="390"
                  strokeDashoffset={390 - (390 * puntuacionTotal) / 100}
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-white tracking-tight">{puntuacionTotal}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">PUNTOS</span>
              </div>
            </div>

            <p className="text-sm font-medium text-gray-400">
              Desempeño general de tu arquitectura: <span className={`font-bold ${etiquetaActual.color}`}>{etiquetaActual.texto}</span>
            </p>
          </div>

          {/* Tarjeta de Detalle del Pilar Seleccionado */}
          <div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800 space-y-4">
            <div className="flex gap-2">
              {pilares.map((pilar) => (
                <button
                  key={pilar.abreviatura}
                  onClick={() => establecerPilarSeleccionado(pilar.abreviatura)}
                  className={`w-9 h-9 rounded-lg font-bold text-sm transition-all duration-200 ${
                    pilarSeleccionado === pilar.abreviatura
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md'
                      : 'bg-gray-850 hover:bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {pilar.abreviatura}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              <h4 className="text-md font-bold text-white flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${pilarDetalle.color}`}></span>
                {pilarDetalle.nombre}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed min-h-[50px]">{pilarDetalle.descripcion}</p>
            </div>

            {/* Barra de progreso visual dentro del detalle */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-gray-500 font-bold uppercase">
                <span>Nivel de Madurez</span>
                <span>{pilarDetalle.nivel} / 100</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${pilarDetalle.color} transition-all duration-300`}
                  style={{ width: `${pilarDetalle.nivel}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
