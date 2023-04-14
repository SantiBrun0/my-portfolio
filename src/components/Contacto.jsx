import React from 'react'

const Contacto = () => {
  return (
    <section className='contacto' id='contacto'>
        <div className='all-container'>

        <form
          action="https://formspree.io/f/mwkjwyng"
          method="POST"
        >
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

        </div>
    </section>
  )
}

export default Contacto