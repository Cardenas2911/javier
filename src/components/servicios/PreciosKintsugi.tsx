import React, { useState } from 'react';

interface Paquete {
  id: string;
  nombre: string;
  precioCOP: number;
  precioUSD: number;
  videos: number;
  frecuencia: string;
  descripcion: string;
  detalles: string[];
  psicologia: string;
  estrella?: boolean;
  senuelo?: boolean;
}

export default function PreciosKintsugi() {
  const [moneda, setMoneda] = useState<'COP' | 'USD'>('COP');
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState<string>('viralidad');

  const paquetes: Paquete[] = [
    {
      id: 'traccion',
      nombre: 'Paquete Tracción',
      precioCOP: 450000,
      precioUSD: 120,
      videos: 12,
      frecuencia: '3 videos por semana',
      descripcion: 'Edición con IA, subtítulos dinámicos de alto impacto y cortes de precisión sin silencios.',
      detalles: [
        '12 videos al mes (máx. 30s)',
        '3 videos por semana',
        'Edición optimizada con IA',
        'Subtítulos dinámicos de alta retención',
        'Cortes quirúrgicos sin silencios',
        '1 ronda de corrección por video',
        'Entrega en 48 horas hábiles'
      ],
      psicologia: 'Ideal para probar el servicio y comenzar a llenar tu embudo de ventas con tus primeras piezas sin riesgo.'
    },
    {
      id: 'viralidad',
      nombre: 'Viralidad Kintsugi',
      precioCOP: 750000,
      precioUSD: 200,
      videos: 24,
      frecuencia: '6 videos por semana',
      descripcion: 'Edición rápida de alta retención, B-Roll de stock, efectos de sonido inmersivos y diseño tipográfico premium.',
      detalles: [
        '24 videos al mes (máx. 30s)',
        '6 videos por semana',
        'Edición rápida de alta conversión',
        'Imágenes de apoyo (B-Roll) seleccionadas',
        'Efectos de sonido (SFX) e impacto auditivo',
        'Diseño tipográfico premium',
        'Corrección de color cinematográfica',
        '2 rondas de corrección por video',
        'Entrega prioritaria'
      ],
      psicologia: 'La opción más inteligente y rentable. El costo por video se reduce drásticamente multiplicando tu viralidad diaria.',
      estrella: true
    },
    {
      id: 'dominio',
      nombre: 'Dominio Total + SEO',
      precioCOP: 1100000,
      precioUSD: 290,
      videos: 30,
      frecuencia: '1 video diario (30 videos)',
      descripcion: 'Dominio absoluto de la atención. Edición cinematográfica premium y títulos SEO optimizados para motores de búsqueda de TikTok y Reels.',
      detalles: [
        '30 videos al mes (máx. 30s)',
        '1 video al día (Consistencia total)',
        'Edición premium cinematográfica personalizada',
        'B-Roll premium y transiciones de diseño',
        'Diseño sonoro avanzado (SFX) y música sin copyright',
        'Títulos SEO optimizados para buscadores (SEO para TikTok/Reels)',
        'Corrección de color y etalonaje VIP',
        'Correcciones ilimitadas',
        'Canal de Slack/WhatsApp exclusivo y soporte prioritario'
      ],
      psicologia: 'Dominio total de tu nicho. Consistencia diaria combinada con posicionamiento de búsqueda inteligente.',
      senuelo: true
    }
  ];

  const formatearPrecio = (valor: number) => {
    if (moneda === 'COP') {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
      }).format(valor) + ' COP';
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(valor) + ' USD';
    }
  };

  const calcularValorPorVideo = (pkg: Paquete) => {
    const precio = moneda === 'COP' ? pkg.precioCOP : pkg.precioUSD;
    return Math.round(precio / pkg.videos);
  };

  return (
    <div className="space-y-16" data-sujeto="SeccionPreciosKintsugi" data-predicado="ofrecePaquetes" data-objeto="LineaDeViralidad">
      
      {/* Controles de Moneda */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md max-w-2xl mx-auto">
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Visualizar en tu moneda</h4>
          <p className="text-xs text-gray-500 mt-1">Elige entre pesos colombianos o dólares americanos.</p>
        </div>
        
        <div className="flex items-center gap-1 bg-black/60 p-1.5 rounded-xl border border-white/10">
          <button 
            onClick={() => setMoneda('COP')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
              moneda === 'COP' 
                ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/20' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Pesos (COP)
          </button>
          <button 
            onClick={() => setMoneda('USD')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
              moneda === 'USD' 
                ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/20' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Dólares (USD)
          </button>
        </div>
      </div>

      {/* Grid de Tarjetas de Precios */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {paquetes.map((pkg) => {
          const precioActual = moneda === 'COP' ? pkg.precioCOP : pkg.precioUSD;
          const valorPorVideo = calcularValorPorVideo(pkg);

          return (
            <div 
              key={pkg.id}
              onClick={() => setPaqueteSeleccionado(pkg.id)}
              className={`relative rounded-3xl p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                pkg.estrella 
                  ? 'bg-gradient-to-b from-amber-500/10 via-black/90 to-black/90 border-2 border-amber-500 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.15)] lg:scale-105 z-10' 
                  : paqueteSeleccionado === pkg.id 
                    ? 'bg-white/[0.04] border border-amber-500/50 shadow-2xl' 
                    : 'bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              {/* Insignia de Producto Estrella */}
              {pkg.estrella && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                  ⭐ PRODUCTO ESTRELLA
                </div>
              )}

              {pkg.senuelo && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                  ⚡ DOMINIO ABSOLUTO
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{pkg.nombre}</h3>
                  <p className="text-xs text-amber-500 font-semibold mt-1.5 tracking-wider uppercase">{pkg.frecuencia}</p>
                </div>

                <p className="text-sm text-gray-400 font-light leading-relaxed min-h-[60px]">{pkg.descripcion}</p>

                {/* Sección de Precio */}
                <div className="py-6 border-y border-white/5 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                      {formatearPrecio(precioActual)}
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">/ mes</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                    <span>Costo unitario por video:</span>
                    <span className="text-amber-500 font-bold">
                      {formatearPrecio(valorPorVideo)}
                    </span>
                  </div>
                </div>

                {/* Lista de características */}
                <ul className="space-y-3.5 text-sm text-gray-300 font-light">
                  {pkg.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="p-0.5 rounded-full bg-amber-500/10 text-amber-500 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de Acción y Psicología */}
              <div className="mt-8 space-y-4">
                <a 
                  href={`https://wa.me/573000000000?text=Hola%20Javier,%20estoy%20interesado%20en%20el%20${encodeURIComponent(pkg.nombre)}%20de%20Creativos%20Kintsugi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4.5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2.5 ${
                    pkg.estrella 
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40' 
                      : 'border border-white/25 hover:border-amber-500 hover:text-amber-500 text-white bg-white/[0.01] hover:bg-white/[0.03]'
                  }`}
                >
                  Adquirir Paquete
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {/* Mensaje de psicología persuasiva sutil */}
                <p className="text-[10px] text-gray-500 text-center font-light leading-relaxed">
                  {pkg.psicologia}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* Simulador Interactivo de ROI y Ahorro Inteligente */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/5 backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500">📈</span>
          Simulador de Ahorro Inteligente
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Horas de Edición Ahorradas</span>
            <div className="text-3xl font-black text-white">
              ~48 Horas <span className="text-amber-500 text-sm">/ mes</span>
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Basado en un promedio de 2 horas de edición, etalonaje y búsqueda de B-roll por video de 30 segundos.
            </p>
          </div>
          
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/5 py-6 md:py-0 md:px-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Costo por video vs. Freelancer</span>
            <div className="text-3xl font-black text-white">
              70% Menor
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Un editor independiente cobra entre $70.000 y $120.000 COP por pieza editada individualmente.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Impacto en Algoritmo</span>
            <div className="text-3xl font-black text-white">
              6x Frecuencia
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Publicar de 3 a 6 videos por semana multiplica exponencialmente las impresiones orgánicas y la velocidad del embudo.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
