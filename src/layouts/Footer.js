import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-heading">Encontra un hogar para vos</p>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Nosotros</h2>
            <Link to="/login">lorem</Link>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contactanos</h2>
            <Link to="/login">lorem</Link>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Redes</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <BiBuildingHouse className="navbar-icon" />
              DOMUS
            </Link>
          </div>
          <small className="website-rights">DOMUS © 2021 - GRUPO 12</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.youtube.com/watch?v=Lrj2Hq7xqQ8"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
