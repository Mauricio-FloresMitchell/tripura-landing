function Services() {
  return (
    <section className="py-32 px-6 bg-sky-50">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4">
            Productos
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
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
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-sky-100 hover:shadow-2xl transition-all duration-300">

            <div className="mb-8">
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                Más solicitada
              </span>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Agua Purificada
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Agua purificada de alta calidad ideal para el consumo diario
              de toda la familia.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-black text-sky-600">
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

            <button className="w-full bg-sky-600 hover:bg-sky-500 text-white py-4 rounded-2xl font-semibold transition-all duration-300">
              Pedir ahora
            </button>

          </div>

          {/* ALCALINA */}
          <div className="bg-slate-900 rounded-3xl p-10 shadow-lg text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-52 h-52 bg-sky-500/20 blur-[80px] rounded-full"></div>

            <div className="relative z-10">

              <div className="mb-8">
                <span className="bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold">
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
                <span className="text-5xl font-black text-sky-400">
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

              <button className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 py-4 rounded-2xl font-semibold transition-all duration-300">
                Pedir ahora
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services