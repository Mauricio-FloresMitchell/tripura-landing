import nosotrosImage from '../assets/nosotros-image.jpg'

function About() {
  return (
    <section id="nosotros" className="py-32 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src={nosotrosImage}
            alt="Tripura"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4">
            Nosotros
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
            Calidad y confianza en cada entrega
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            En Tripura nos especializamos en la distribución de agua
            purificada y alcalina para hogares y empresas.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestro compromiso es brindar un servicio rápido, seguro
            y confiable, garantizando productos certificados y atención
            personalizada para cada cliente.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About
