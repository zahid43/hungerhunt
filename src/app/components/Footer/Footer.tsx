"use client";

import React from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  // Contact info data
  const contacts = [
    {
      icon: "fa-map-marker",
      text: "Kot Khawaja Saeed, Lahore",
      link: "https://maps.app.goo.gl/BBWMJqyFabzbjm9o9",
    },
    {
      icon: "fa-phone",
      text: "+92 309 032 11 77",
      link: "tel:+923090321177",
    },
    {
      icon: "fa-envelope",
      text: "hungerhuntfoods@gmail.com",
      link: "mailto:hungerhuntfoods@gmail.com",
    },
  ];

  // Social links data
  const socials = [
    { icon: "fab fa-facebook", link: "https://www.facebook.com/hungerhunt01" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com/hunger__hunt_/" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@hungerhunt01" },
    { icon: "fab fa-whatsapp", link: "#" },
  ];

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          {/* Contact */}
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                {contacts.map((contact, index) => (
                  <a href={contact.link} key={index} target="_blank">
                    <i className={`fa ${contact.icon}`} aria-hidden="true"></i>
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About / Social */}
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">
                Hunger Hunt
              </a>
              <p>Hunger Hunt started with one simple idea — great food, made fresh, shared with love. Today, we’re proud to serve pizzas, burgers, and deals that bring smiles to every table. Because for us, every meal is a memory worth making.</p>
              <div className="footer_social">
                {socials.map((social, index) => (
                  <a href={social.link} key={index} target="_blank">
                    <i className={`fa ${social.icon}`} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>04.00 PM - 01.00 Am</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <p>
            &copy; {currentYear} All Rights Reserved By{" "}
            <a href="https://html.design/">Hunger Hunt</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
