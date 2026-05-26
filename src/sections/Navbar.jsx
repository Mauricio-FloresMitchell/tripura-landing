import logo from '../assets/logo.svg'
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#BCD0E3]/20 bg-[#0C1F3F]/90 shadow-[0_18px_50px_rgba(12,31,63,0.18)] backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="flex h-20 w-20 shrink-0 items-center"
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

          <a href="#contacto" className="hover:text-white transition">
            Empresas
          </a>

          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>

        </nav>

        <a
          href="#contacto"
          className="rounded-xl bg-[#239CBC] px-5 py-3 font-semibold text-white shadow-lg shadow-[#239CBC]/25 transition hover:bg-[#0F77B8]"
        >
          Pedir agua
        </a>

      </div>

    </header>
  )
}

export default Navbar
