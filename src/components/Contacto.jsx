import React from "react";

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="all-container">
        <form action="https://formspree.io/f/mwkjwyng" method="POST">
          <label>
            Tu email:
            <input type="email" name="email" />
          </label>
          <label>
            Mensaje:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>

        <div className="social-media">
          <a target="_blank" href="https://github.com/SantiBrun0">
            <i class="bx bxl-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/santiagobrunodev/"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/sntbrn/">
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5493534010152&text=Hola%20Santiago!👋🏻%20estuve%20viendo%20tu%20portfolio💻"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
