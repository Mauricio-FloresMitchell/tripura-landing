import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const whatsappMessage = 'Hola, vengo de la página web de TRIPURA. Quiero hacer un pedido de agua.'
const whatsappUrl = `https://wa.me/5215529718974?text=${encodeURIComponent(whatsappMessage)}`


function Footer() {
  return (
    <footer className="bg-[#07162D] text-white pt-24 pb-10 px-6 border-t border-[#BCD0E3]/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* INFO */}
        <div>

          <img
            src={logo}
            alt="TRIPURA"
            className="mb-6 h-24 w-24 object-contain"
          />

          <p className="text-[#BCD0E3] text-lg leading-relaxed mb-8 max-w-xl">
            Agua purificada y alcalina con servicio confiable
            a domicilio para hogares y empresas.
          </p>

          <div className="space-y-4 text-white/80">

            <p>
              📍 Consolidada 95, Col. Vista Hermosa,
              54080 Estado de México, Méx.
            </p>

            <p>
              🕒 Lunes a Viernes: 9am - 6pm
            </p>

            <p>
              🕒 Sábados: 9am - 3pm
            </p>

            <p>
              ❌ Domingos cerrado
            </p>

          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-10">

            <a
              href="https://www.facebook.com/tripuramxtlalnepantla/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Tripura"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#239CBC] transition flex items-center justify-center border border-[#BCD0E3]/10"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/tripura.mx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Tripura"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#239CBC] transition flex items-center justify-center border border-[#BCD0E3]/10"
            >
              <FaInstagram />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Tripura"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#239CBC] transition flex items-center justify-center border border-[#BCD0E3]/10"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* MAP */}
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-[#BCD0E3]/20 min-h-[400px]">

          <iframe
            title="Mapa Tripura"
            src="https://www.google.com/maps?q=Consolidada+95,+Vista+Hermosa,+54080+Ciudad+de+México,+Méx.&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#BCD0E3]/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-[#BCD0E3]/70 text-sm">
          © 2026 Tripura. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-6 text-sm">

          <Link
            to="/privacy"
            className="text-[#BCD0E3]/80 hover:text-white transition"
          >
            Aviso de privacidad
          </Link>

          <Link
            to="/terms"
            className="text-[#BCD0E3]/80 hover:text-white transition"
          >
            Términos y condiciones
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer
