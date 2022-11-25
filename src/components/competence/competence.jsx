import React from 'react'
import "./competence.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Competence = () => {
  return (
    <section id='competence'>
      <h5>Compétences</h5>
      <h2>Informatiques & Humaines</h2>

      <div className="container competence__container">

        <div className="langage__info">
          <h3>Programmation</h3>
          <div className="competence__content">
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Java</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>JavaScript</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Python</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>PHP</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>HTTP/CSS</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>SQL</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>C</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>LaTeX</h4>
            </article>
          </div>
        </div>

        <div className="logiciels_environnements">
          <h3>Logiciels & Environnements</h3>
          <div className="competence__content">
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>React Js</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>GitHub</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>VsCode</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Node.js</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Atom</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Angular</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Trello</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Express.js</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Figma</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Boostrap</h4>
            </article>
          </div>
        </div>

        <div className="soft__skills">
          <h3>Compétences Humaines</h3>
          <div className="competence__content">
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Motivé</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Adaptabilité</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Rigoureux</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Fiable</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Travail d'équipe</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Polyvalent</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Curieux</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Impliqué</h4>
            </article>
          </div>
        </div>

        <div className="langues">
          <h4>Langues</h4>
          <div className="competence__content">
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Anglais C1 professionnel</h4>
            </article>
            <article className='competence__detail'>
              <BsPatchCheckFill className='competence__detail-icons'/>
              <h4>Espagnol B1 Débutant/Intermediare </h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Competence