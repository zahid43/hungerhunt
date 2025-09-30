"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-pizza.png" alt="About" />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>We Are Hunger Hunt.</h2>
              </div>
              <p>Lahore ka asli taste — freshly baked pizzas, juicy burgers, and flavors that make you come back for more.</p>
              <p className="urdu-font">لاہور کا اصلی ذائقہ — تازہ بیک پیزا، جوسی برگرز، اور ایسے فلیورز جو بار بار آنے پر مجبور کر دیں۔</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
