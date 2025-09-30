import React from 'react'

function WhatsappBtn({ itemName }) {
  return (
    <a
      href={`https://wa.me/923090321177?text=I want to order ${itemName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success d-flex align-items-center justify-content-center gap-2 mt-3"
    >
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
      />
      Order on WhatsApp
    </a>
  )
}

export default WhatsappBtn
