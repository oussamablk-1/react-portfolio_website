import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Oussama</a>
    
      <ul className='permalinks'>
        <li><a href="#"></a>Accueil</li>
        <li><a href="#about"></a>A propos</li>
        <li><a href="#competence"></a>Compétences</li>
        <li><a href="#projects"></a>Projets</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>
      

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/oussama-belkadi-devweb/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/oussamablk-1" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/devoussb" target="_blank"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio codé par Oussama</small>
      </div>
    </footer>
  )
}

export default Footer