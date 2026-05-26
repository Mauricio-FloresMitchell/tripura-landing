function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-32 px-6 bg-gradient-to-b from-[#EAF3FA] to-white">

      <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full border border-[#BCD0E3] bg-[#BCD0E3]/30"></div>
      <div className="absolute right-[-140px] bottom-16 h-72 w-72 rounded-full bg-[#239CBC]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#0F77B8] font-semibold mb-4">
            Productos
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#0C1F3F] mb-6">
            Agua para cada necesidad
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Contamos con opciones de agua purificada y alcalina
            para hogares y empresas con servicio a domicilio.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* PURIFICADA */}
          <div className="bg-white/95 rounded-3xl p-10 shadow-xl shadow-[#0C1F3F]/10 border border-[#BCD0E3] hover:shadow-2xl transition-all duration-300">

            <div className="mb-8">
              <span className="bg-[#BCD0E3]/60 text-[#0C1F3F] px-4 py-2 rounded-full text-sm font-semibold">
                Más solicitada
              </span>
            </div>

            <h3 className="text-3xl font-black text-[#0C1F3F] mb-4">
              Agua Purificada
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Agua purificada de alta calidad ideal para el consumo diario
              de toda la familia.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-black text-[#0F77B8]">
                $37
              </span>

              <span className="text-slate-500 ml-2">
                / garrafón 20L
              </span>
            </div>

            <ul className="space-y-4 mb-10 text-slate-700">

              <li>✅ Agua purificada certificada</li>
              <li>✅ Servicio a domicilio</li>
              <li>✅ Entrega rápida</li>
              <li>✅ Ideal para hogares</li>

            </ul>

            <a
              href="#contacto"
              className="block text-center w-full bg-[#0F77B8] hover:bg-[#239CBC] text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-[#0F77B8]/20"
            >
              Pedir ahora
            </a>

          </div>

          {/* ALCALINA */}
          <div className="bg-[#0C1F3F] rounded-3xl p-10 shadow-xl shadow-[#0C1F3F]/25 text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-[#239CBC]/30">

            <div className="absolute top-0 right-0 w-52 h-52 bg-[#239CBC]/25 blur-[80px] rounded-full"></div>

            <div className="relative z-10">

              <div className="mb-8">
                <span className="bg-[#239CBC]/20 text-[#BCD0E3] px-4 py-2 rounded-full text-sm font-semibold border border-[#CC2021]/30">
                  Premium
                </span>
              </div>

              <h3 className="text-3xl font-black mb-4">
                Agua Alcalina
              </h3>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Opción premium con propiedades alcalinas para quienes
                buscan un estilo de vida saludable.
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black text-[#BCD0E3]">
                  $60
                </span>

                <span className="text-slate-400 ml-2">
                  / garrafón 20L
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-slate-200">

                <li>✅ Agua alcalina premium</li>
                <li>✅ Balance de pH</li>
                <li>✅ Sabor ligero y fresco</li>
                <li>✅ Ideal para consumo frecuente</li>

              </ul>

              <a
                href="#contacto"
                className="block text-center w-full bg-[#BCD0E3] hover:bg-white text-[#0C1F3F] py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Pedir ahora
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services
