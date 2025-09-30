"use client";

export default function Slider() {
  const slides = [
    {
      title: "Heatwave Zinger",
      desc: "Chicken fillet infused with our secret spices for a bold kick.",
      price: "Only Rs. 400",
    },
    {
      title: "Chickzilla Burger",
      desc: "Chicken patty in a soft bun with signature mayo, onion, tomato and fresh lettuce.",
      price: "Only Rs. 400",
    },
    {
      title: "OG Zinger",
      desc: "Crispy chicken fillet with a creamy, cheesy coating for a classic taste.",
      price: "Only Rs. 300",
    },
  ];

  return (
    <section className="slider_section">
      <div
        id="customCarousel1"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-wrap="true"
      >
        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.title}</h1>
                      <p>{slide.desc}</p>
                      <h3>{slide.price}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="container">
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#customCarousel1"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
