import heroImage from '../assets/hero-image.jpg'

const whatsappMessage = 'Hola, vengo de la página web de TRIPURA. Quiero hacer un pedido de agua.'
const whatsappUrl = `https://wa.me/527206073820?text=${encodeURIComponent(whatsappMessage)}`

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0C1F3F] px-5 pt-32 pb-16 md:px-6 md:pt-24 md:pb-0">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(35,156,188,0.35),transparent_34%),linear-gradient(135deg,#0C1F3F_0%,#0F77B8_55%,#0C1F3F_100%)]"></div>
      <div className="absolute -top-28 right-[-10%] h-[420px] w-[420px] rounded-full border border-[#BCD0E3]/20 bg-[#239CBC]/10 blur-sm"></div>
      <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[620px] rounded-[50%] border border-[#BCD0E3]/20 bg-[#BCD0E3]/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* TEXT */}
        <div>

          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#BCD0E3] font-semibold mb-5 md:mb-6">
            Agua purificada a domicilio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.08] md:leading-tight text-white mb-6 md:mb-8">
            Tu agua purificada de confianza
            <span className="block text-[#BCD0E3]">
              en Tlalnepantla
            </span>
          </h1>

          <p className="text-[#BCD0E3] text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
            Entrega rápida y confiable para hogares y empresas
            en Vista Hermosa y zonas cercanas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#239CBC] hover:bg-[#0F77B8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 text-center shadow-xl shadow-[#239CBC]/25"
            >
              Pedir por WhatsApp
            </a>

            <a
              href="#servicios"
              className="border border-[#BCD0E3]/50 text-[#BCD0E3] hover:border-white hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 text-center"
            >
              Ver productos
            </a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center pt-2 md:pt-0">

          <div className="absolute w-[350px] h-[350px] bg-[#239CBC]/30 blur-[100px] rounded-full"></div>

          <img
            src={heroImage}
            alt="Agua purificada"
            className="relative z-10 w-full max-w-[22rem] sm:max-w-lg rounded-3xl border border-[#BCD0E3]/30 shadow-2xl shadow-[#0C1F3F]/60 object-cover"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero
