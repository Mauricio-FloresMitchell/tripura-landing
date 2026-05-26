import { useState } from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#BCD0E3]/20 bg-[#0C1F3F]/90 shadow-[0_18px_50px_rgba(12,31,63,0.18)] backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">

        <a
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={closeMenu}
          className="flex h-16 w-16 shrink-0 items-center md:h-20 md:w-20"
        >
          <img
            src={logo}
            alt="TRIPURA"
            className="h-full w-full object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[#BCD0E3] font-medium">

          <a href="#inicio" className="hover:text-white transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-white transition">
            Productos
          </a>

          <a href="#nosotros" className="hover:text-white transition">
            Nosotros
          </a>

          <a href="#empresas" className="hover:text-white transition">
            Empresas
          </a>

          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>

        </nav>

        <div className="flex items-center gap-3">

          <a
            href="#contacto"
            onClick={closeMenu}
            className="rounded-xl bg-[#239CBC] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#239CBC]/25 transition hover:bg-[#0F77B8] md:px-5 md:text-base"
          >
            Pedir agua
          </a>

          <button
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#BCD0E3]/30 text-white md:hidden"
          >
            <span className="h-0.5 w-5 rounded-full bg-current"></span>
            <span className="h-0.5 w-5 rounded-full bg-current"></span>
            <span className="h-0.5 w-5 rounded-full bg-current"></span>
          </button>

        </div>

      </div>

      {isMenuOpen && (
        <nav className="border-t border-[#BCD0E3]/15 bg-[#0C1F3F]/95 px-6 py-5 shadow-2xl shadow-[#0C1F3F]/30 md:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[#BCD0E3] font-medium">

            <a href="#inicio" onClick={closeMenu} className="hover:text-white transition">
              Inicio
            </a>

            <a href="#servicios" onClick={closeMenu} className="hover:text-white transition">
              Productos
            </a>

            <a href="#nosotros" onClick={closeMenu} className="hover:text-white transition">
              Nosotros
            </a>

            <a href="#empresas" onClick={closeMenu} className="hover:text-white transition">
              Empresas
            </a>

            <a href="#contacto" onClick={closeMenu} className="hover:text-white transition">
              Contacto
            </a>

          </div>

        </nav>
      )}

    </header>
  )
}

export default Navbar
