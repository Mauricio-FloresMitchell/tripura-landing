import { FaWhatsapp } from 'react-icons/fa'

const whatsappMessage = 'Hola, vengo de la página web de TRIPURA. Quiero hacer un pedido de agua.'
const whatsappUrl = `https://wa.me/5215529718974?text=${encodeURIComponent(whatsappMessage)}`

function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  )
}

export default WhatsAppFloat
