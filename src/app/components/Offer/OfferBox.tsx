"use client";

import WhatsappBtn from "../Universal/WhatsappBtn";

interface OfferBoxProps {
  img: string;
  title: string;
  discount: string;
  link?: string;
}

export default function OfferBox({ img, title, discount }: OfferBoxProps) {
  return (
    <div className="col-md-6 offer-box">
      <div className="box">
        <div className="img-box">
          <img src={img} alt={title} />
        </div>
        <div className="detail-box">
          <h5>{title}</h5>
          <h6>
            <span>{discount}</span> Off
          </h6>
          <WhatsappBtn />
        </div>
      </div>
    </div>
  );
}
