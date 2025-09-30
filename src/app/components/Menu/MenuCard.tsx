import React from "react";
import WhatsappBtn from "../Universal/WhatsappBtn";

const MenuCard = ({ item }) => {
  // Collect price variants dynamically
  const variants = [
    { label: item.item1, price: item.item1Price },
    { label: item.item2, price: item.item2Price },
    { label: item.item3, price: item.item3Price },
  ].filter(v => v.price); // only keep ones with price

  return (
    <div className={`col-sm-6 col-lg-4 all ${item.category}`}>
      <div className="box">
        <div>
          <div className="img-box">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="detail-box">
            <h5>{item.name}</h5>
            <p>{item.desc}</p>
            <div className="my-3">
              <div className="options gap-3">
                {variants.map((v, idx) => (
                  <p key={idx} className="d-flex align-items-center">
                    <span>Rs. {v.price}</span>
                    <span className="price-detail">{v.label}</span>
                  </p>
                ))}
              </div>
            </div>
              <WhatsappBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
