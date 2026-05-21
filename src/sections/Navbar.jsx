function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-sky-100">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-black text-sky-700">
          TRIPURA
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

          <a href="#inicio" className="hover:text-sky-600 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-sky-600 transition">
            Productos
          </a>

          <a href="#nosotros" className="hover:text-sky-600 transition">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-sky-600 transition">
            Empresas
          </a>

          <a href="#contacto" className="hover:text-sky-600 transition">
            Contacto
          </a>

        </nav>

        <a
          href="#contacto"
          className="bg-sky-600 hover:bg-sky-500 transition text-white px-5 py-3 rounded-xl font-semibold"
        >
          Pedir agua
        </a>

      </div>

    </header>
  )
}

export default Navbar
