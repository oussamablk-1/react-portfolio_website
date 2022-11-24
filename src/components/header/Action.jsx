import React from 'react'
import CV from "../../assets/CV_Belkadi_Oussama.pdf"

/* === Component qui permet de télécharger le CV et d'aller directement a la section contact === */

const Action = () => {
  return (
    <div className="action">
        <a href={CV} download className='btn'>Télécharger le CV</a>
        <a href="#contact" className='btn btn-primary'>Contacter</a>
    </div>
  )
}

export default Action