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

    const mensaje = `
Hola, quiero realizar un pedido de agua.%0A%0A
👤 Nombre: ${formData.nombre}%0A
📞 Teléfono: ${formData.telefono}%0A
📍 Dirección: ${formData.direccion}%0A
💧 Producto: ${formData.producto}%0A
🛒 Cantidad: ${formData.cantidad} garrafón(es)
`

    window.open(
      `https://wa.me/527206073820?text=${mensaje}`,
      '_blank'
    )
  }

  return (
    <section className="py-32 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* INFO */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4">
            Pedido rápido
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
            Recibe agua hasta tu hogar
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Realiza tu pedido de manera rápida y sencilla.
            Completa el formulario y te atenderemos vía WhatsApp.
          </p>

          <div className="space-y-4 text-slate-700">

            <p>✅ Servicio a domicilio</p>
            <p>✅ Atención rápida</p>
            <p>✅ Cobertura local</p>
            <p>✅ Pedidos para hogares y empresas</p>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-sky-50 rounded-3xl p-8 shadow-xl border border-sky-100">

          <div className="space-y-6">

            {/* Nombre */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Nombre
              </label>

              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Teléfono
              </label>

              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="55XXXXXXXX"
                className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Dirección
              </label>

              <textarea
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Escribe tu dirección"
                rows="4"
                className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            {/* Producto */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Producto
              </label>

              <select
                name="producto"
                value={formData.producto}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Agua Purificada</option>
                <option>Agua Alcalina</option>
              </select>
            </div>

            {/* Cantidad */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Cantidad de garrafones
              </label>

              <input
                type="number"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                min="1"
                className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-sky-600 hover:bg-sky-500 text-white py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
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