"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ArrowRight, Menu, X } from "lucide-react";
import "./navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="boxed">
        <div className="navbar__logo">
          <Image
            src={logo}
            className="navbar__logo__img"
            alt="Fintrix Logo"
            width={36}
            height={36}
          />
          <span className="body-xl wt-500">Fintrix</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__links body-m">
          <a href="#" className="navbar__links__link">
            Overview
          </a>
          <a href="#" className="navbar__links__link">
            Activity
          </a>
          <a href="#" className="navbar__links__link">
            Manage
          </a>
          <a href="#" className="navbar__links__link">
            Program
          </a>
          <a href="#" className="navbar__links__link">
            Account
          </a>
          <a href="#" className="navbar__links__link">
            Reports
          </a>
        </div>

        <div className="navbar__cta">
          <button className="btn-fill body-m">
            Login
            <span>
              <ArrowRight size={20} />
            </span>
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button className="navbar__hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-menu ${
          isMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <div className="navbar__mobile-menu__content">
          {/* Close button inside menu */}
          <button className="navbar__mobile-menu__close" onClick={toggleMenu}>
            <X size={28} />
          </button>

          <div className="navbar__mobile-menu__logo">
            <Image
              src={logo}
              alt="Fintrix Logo"
              className="navbar__mobile-menu__logo__img"
              width={36}
              height={36}
            />
            <span className="body-xl wt-500">Fintrix</span>
          </div>

          <div className="navbar__mobile-menu__links body-m">
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Overview
            </a>
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Activity
            </a>
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Manage
            </a>
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Program
            </a>
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Account
            </a>
            <a
              href="#"
              className="navbar__mobile-menu__link"
              onClick={toggleMenu}
            >
              Reports
            </a>
          </div>

          <div className="navbar__mobile-menu__cta">
            <button className="btn-fill body-m" onClick={toggleMenu}>
              Login
              <span>
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
