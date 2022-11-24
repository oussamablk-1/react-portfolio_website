import React from 'react'
import "./about.css"
import moiGrand from "../../assets/moiGrand.jpg"
import {BsFillFileEarmarkCodeFill} from "react-icons/bs"
import {GiSportMedal} from "react-icons/gi"
import {SiYourtraveldottv} from "react-icons/si"

export const About = () => {
  return (
    <section id='about'>
      <h5> Qui je suis </h5>
      <h2>A propos</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={moiGrand} alt="A propos image" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <BsFillFileEarmarkCodeFill className='about__icon'/>
              <h5>Informaticien</h5>
              <small>
                Diplômé de licence informatique, intégrant le parcours développeur d'applications web et mobile à la Wild Code School
              </small>
            </article>

            <article className='about__card'>
              <GiSportMedal className='about__icon'/>
              <h5>Sportif</h5>
              <small>
                Sportif de haut niveau en basketball chez les U20. Aujourd'hui pratiquant de lutte, MMA et grappling
              </small>
            </article>

            <article className='about__card'>
              <SiYourtraveldottv className='about__icon'/>
              <h5>Voyageur</h5>
              <small>
                Glob trotteur et amoureux des paysages et des cultures du monde entier
              </small>
            </article>

          </div>

          <p>Actuellement à la recherche d'une alternance dans le domaine du développement Web sur la partie Front End vous pouvez me contacter via le formulaire de contact en appuyant sur le bouton ci-dessous.</p>

          <a href="#contact" className='btn btn-primary'>Contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About
