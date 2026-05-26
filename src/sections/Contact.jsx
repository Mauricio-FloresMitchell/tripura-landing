import { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    producto: 'Agua Purificada',
    cantidad: 1,
  })

  const [businessData, setBusinessData] = useState({
    empresa: '',
    ubicacion: '',
    telefono: '',
    cantidad: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBusinessChange = (e) => {
    setBusinessData({
      ...businessData,
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

  const handleBusinessWhatsApp = () => {
    const requiredFields = [
      businessData.empresa,
      businessData.ubicacion,
      businessData.telefono,
      businessData.cantidad,
    ]

    if (requiredFields.some((field) => !field.trim())) {
      window.alert('Completa empresa o persona, ubicación, teléfono y cantidad aproximada.')
      return
    }

    const mensaje = `Hola, quiero información para un pedido empresarial o recurrente.

🏢 Empresa o persona: ${businessData.empresa}
📍 Ubicación: ${businessData.ubicacion}
📞 Teléfono de contacto: ${businessData.telefono}
🛒 Cantidad aproximada: ${businessData.cantidad} garrafones
📝 Mensaje adicional: ${businessData.mensaje || 'Sin mensaje adicional'}`

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

      <div className="relative max-w-6xl mx-auto mt-20 rounded-3xl border border-[#CC2021]/30 bg-white/95 p-8 shadow-2xl shadow-[#0C1F3F]/40">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="uppercase tracking-[0.3em] text-[#CC2021] font-semibold mb-4">
              Empresas
            </p>

            <h3 className="text-3xl md:text-4xl font-black text-[#0C1F3F] mb-6">
              Pedidos empresariales o recurrentes
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed">
              Coordina entregas para oficinas, negocios o consumo frecuente.
              Envíanos los datos básicos y te atendemos directamente por WhatsApp.
            </p>

          </div>

          <div className="rounded-3xl border border-[#BCD0E3] bg-gradient-to-br from-white to-[#BCD0E3]/20 p-6">

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="block mb-2 font-semibold text-[#0C1F3F]">
                  Empresa o persona
                </label>

                <input
                  type="text"
                  name="empresa"
                  value={businessData.empresa}
                  onChange={handleBusinessChange}
                  placeholder="Nombre de empresa o contacto"
                  className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#CC2021]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0C1F3F]">
                  Ubicación
                </label>

                <input
                  type="text"
                  name="ubicacion"
                  value={businessData.ubicacion}
                  onChange={handleBusinessChange}
                  placeholder="Colonia o zona de entrega"
                  className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#CC2021]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0C1F3F]">
                  Teléfono de contacto
                </label>

                <input
                  type="text"
                  name="telefono"
                  value={businessData.telefono}
                  onChange={handleBusinessChange}
                  placeholder="55XXXXXXXX"
                  className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#CC2021]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0C1F3F]">
                  Cantidad aproximada de garrafones requeridos
                </label>

                <input
                  type="number"
                  name="cantidad"
                  value={businessData.cantidad}
                  onChange={handleBusinessChange}
                  min="1"
                  placeholder="Ej. 10"
                  className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#CC2021]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold text-[#0C1F3F]">
                  Mensaje adicional
                </label>

                <textarea
                  name="mensaje"
                  value={businessData.mensaje}
                  onChange={handleBusinessChange}
                  placeholder="Horario preferido, frecuencia o detalles del pedido"
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl border border-[#BCD0E3] focus:outline-none focus:ring-2 focus:ring-[#CC2021]"
                ></textarea>
              </div>

            </div>

            <button
              onClick={handleBusinessWhatsApp}
              className="mt-6 w-full rounded-2xl border border-[#CC2021]/40 bg-[#CC2021] py-5 text-lg font-semibold text-white shadow-lg shadow-[#CC2021]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#A91B1C]"
            >
              Solicitar atención empresarial
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
