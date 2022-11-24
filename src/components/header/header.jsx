import React from 'react'
import "./header.css"
import Action from './Action'
import Moi from '../../assets/moi.png'
import HeaderSocials from './HeaderSocials'

//mettre le nom de la variable en Majuscule
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Belkadi Oussama</h1>
        <h5 className="text-light">Front End Développeur</h5>
        <Action/>
        <HeaderSocials/>
      
        <div className="moi">
          <img src={Moi} alt="moi"/>
        </div>

        <a href="#contact" className="scroll__down">Descendre</a>
      </div>
    </header>
  )
}

export default Header