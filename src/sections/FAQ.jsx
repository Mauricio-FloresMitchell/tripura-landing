import { useState } from 'react'

const faqs = [
  {
    question: '¿Cuál es la diferencia entre agua purificada y agua alcalina?',
    answer:
      'El agua purificada pasa por procesos de filtración para retirar impurezas y ofrecer agua limpia para consumo diario. El agua alcalina tiene un pH más alto que el agua purificada tradicional, por lo que muchas personas la eligen como una opción diferente para su hidratación diaria.',
  },
  {
    question: '¿Dónde entregan?',
    answer:
      'Realizamos entregas locales en Vista Hermosa, Tlalnepantla y zonas cercanas. Para confirmar cobertura, puedes escribirnos por WhatsApp.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos pago en efectivo y transferencia. Para pedidos empresariales o recurrentes, podemos coordinar la forma de pago directamente por WhatsApp.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EAF3FA] px-6 py-28">

      <div className="absolute left-[-160px] top-10 h-80 w-80 rounded-full border border-[#BCD0E3] bg-[#BCD0E3]/30"></div>
      <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-[#239CBC]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl">

        <div className="mb-12 text-center">

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-[#0F77B8]">
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl font-black text-[#0C1F3F] md:text-5xl">
            Información útil antes de pedir
          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-[#BCD0E3] bg-white shadow-lg shadow-[#0C1F3F]/5"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-[#0C1F3F]"
                >
                  <span>{faq.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#BCD0E3] text-[#0F77B8]">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-6 pb-6 text-slate-600 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default FAQ
