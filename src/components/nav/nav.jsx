import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#") //permet de changer l'active classe sur la seci=tion ou l'on clique
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#competence" onClick={() => setActiveNav('#competence')} className={activeNav === '#competence' ? 'active' : ''}><BiBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#project')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav