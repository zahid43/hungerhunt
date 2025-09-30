"use client";

import OfferBox from "./OfferBox";

export default function Offers() {
  const offers = [
    {
      img: "/images/pizza.png",
      title: "Tasty Fridays",
      discount: "15%",
      link: "#",
    },
    {
      img: "/images/zinger-burger.jpg",
      title: "Pizza Days",
      discount: "0",
      link: "",
    },
  ];

  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            {offers.map((offer, index) => (
              <OfferBox key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
