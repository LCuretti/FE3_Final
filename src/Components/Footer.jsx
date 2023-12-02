import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img style={{width: '200px', margin: '0'}} src="/images/DH.png" alt="DH-logo" />

      <>
        <img style={{ cursor: 'pointer' }} src="/images/ico-facebook.png" alt="Icono de Facebook" />
        <img style={{ cursor: 'pointer' }} src="/images/ico-instagram.png" alt="Icono de Instagram" />
        <img style={{ cursor: 'pointer' }} src="/images/ico-tiktok.png" alt="Icono de Tiktok" />
        <img style={{ cursor: 'pointer' }} src="/images/ico-whatsapp.png" alt="Icono de Whatsapp" />
      </>
    </footer>
  );
};

export default Footer;
