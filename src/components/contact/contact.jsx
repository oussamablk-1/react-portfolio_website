import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihf5x9t', 'template_cw6b8lf', form.current, 'vVKRkyIcGGyY8-TeX')
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Parlons</h5>
      <h2>Contacter</h2>

    <div className="container contact__container">

      <div className="contact__options">

        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Oussama.belkadi72@gmail.com</h5>
          <a href="mailto:oussama.belkadi72@gmail.com" target='_blank'>Envoyer un message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+33650484864</h5>
          <a href="https://wa.me/+33650484864" target='_blank'>Envoyer un message</a>
        </article>

        <article className='contact__option'>
          <AiFillTwitterCircle className='contact__option-icon'/>
          <h4>Twitter</h4>
          <h5>@DevOussb</h5>
          <a href="https://twitter.com/messages/compose?recipient_id=1589933892538089480" target='_blank'>Envoyer un message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='nom' placeholder='Votre Nom'  required/>
        <input type="email" name="email" placeholder='Votre Email' required/>
        <textarea name="message" rows="7" placeholder='Ecrivez votre message' required></textarea>
        <button type='submit' className='btn btn-primary'>Envoyer</button>
      </form>
    </div>
    
    </section>
  )
}
/* telecharger email js :  npm install emailjs-com --save*/
export default Contact
