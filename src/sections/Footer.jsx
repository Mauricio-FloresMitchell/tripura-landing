import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* INFO */}
        <div>

          <h2 className="text-4xl font-black mb-6">
            TRIPURA
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
            Agua purificada y alcalina con servicio confiable
            a domicilio para hogares y empresas.
          </p>

          <div className="space-y-4 text-slate-300">

            <p>
              📍 Consolidada 95, Col. Vista Hermosa,
              54080 Ciudad de México, Méx.
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
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/tripura.mx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Tripura"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/527206073820"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Tripura"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* MAP */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[400px]">

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
      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-slate-500 text-sm">
          © 2026 Tripura. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-6 text-sm">

          <Link
            to="/privacy"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            Aviso de privacidad
          </Link>

          <Link
            to="/terms"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            Términos y condiciones
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer
