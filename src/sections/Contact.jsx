import { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    producto: 'Agua Purificada',
    cantidad: 1,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsApp = () => {

    const mensaje = `Hola, quiero realizar un pedido de agua.

👤 Nombre: ${formData.nombre}
📞 Teléfono: ${formData.telefono}
📍 Dirección: ${formData.direccion}
💧 Producto: ${formData.producto}
🛒 Cantidad: ${formData.cantidad} garrafón(es)`

    window.open(
      `https://wa.me/527206073820?text=${encodeURIComponent(mensaje)}`,
      '_blank'
    )
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-32 px-6 bg-[#0C1F3F]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(35,156,188,0.24),transparent_32%)]"></div>
      <div className="absolute bottom-[-120px] right-[-80px] h-72 w-96 rounded-[50%] border border-[#BCD0E3]/20 bg-[#BCD0E3]/10"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* INFO */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#BCD0E3] font-semibold mb-4">
            Pedido rápido
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Recibe agua hasta tu hogar
          </h2>

          <p className="text-[#BCD0E3] text-lg leading-relaxed mb-8">
            Realiza tu pedido de manera rápida y sencilla.
            Completa el formulario y te atenderemos vía WhatsApp.
          </p>

          <div className="space-y-4 text-white/90">

            <p>✅ Servicio a domicilio</p>
            <p>✅ Atención rápida</p>
            <p>✅ Cobertura local</p>
            <p>✅ Pedidos para hogares y empresas</p>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#0C1F3F]/40 border border-[#BCD0E3]">

          <div className="space-y-6">

            {/* Nombre */}
            <div>
              <label className="block mb-2 font-semibold text-[#0C1F3F]">
                Nombre
              </label>

              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#239CBC]"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block mb-2 font-semibold text-[#0C1F3F]">
                Teléfono
              </label>

              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="55XXXXXXXX"
                className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#239CBC]"
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block mb-2 font-semibold text-[#0C1F3F]">
                Dirección
              </label>

              <textarea
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Escribe tu dirección"
                rows="4"
                className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#239CBC]"
              ></textarea>
            </div>

            {/* Producto */}
            <div>
              <label className="block mb-2 font-semibold text-[#0C1F3F]">
                Producto
              </label>

              <select
                name="producto"
                value={formData.producto}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#239CBC]"
              >
                <option>Agua Purificada</option>
                <option>Agua Alcalina</option>
              </select>
            </div>

            {/* Cantidad */}
            <div>
              <label className="block mb-2 font-semibold text-[#0C1F3F]">
                Cantidad de garrafones
              </label>

              <input
                type="number"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                min="1"
                className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#239CBC]"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#239CBC] hover:bg-[#0F77B8] text-white py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#239CBC]/20"
            >
              Enviar pedido por WhatsApp
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
