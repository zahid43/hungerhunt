"use client";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Book Table", href: "/book" },
  ];

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" href="/">
            <img
              src="/images/LOGO.png"
              alt="Hunger Hunt"
              width="80"
              height="94"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${item.active ? "active" : ""}`}
                >
                  <Link className="nav-link" href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
