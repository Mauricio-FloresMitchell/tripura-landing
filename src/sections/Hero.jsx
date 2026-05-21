function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-sky-50 to-white px-6">

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-300/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold mb-6">
            Agua purificada a domicilio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900 mb-8">
            Agua purificada
            <span className="block text-sky-600">
              hasta tu hogar
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
            Servicio rápido y confiable de agua purificada y alcalina
            en Vista Hermosa y zonas cercanas de Tlalnepantla.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <button className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
              Pedir por WhatsApp
            </button>

            <button className="border border-sky-200 hover:border-sky-500 hover:text-sky-600 px-8 py-4 rounded-2xl transition-all duration-300">
              Ver productos
            </button>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">

          <div className="absolute w-[350px] h-[350px] bg-sky-400/20 blur-[100px] rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1564419320408-38e24e038739?q=80&w=1200&auto=format&fit=crop"
            alt="Agua purificada"
            className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl object-cover"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero