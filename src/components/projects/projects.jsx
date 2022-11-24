import React from 'react'
import "./projects.css"
import einhar from '../../assets/einhar.png'
import portfolio from '../../assets/portfolio.png'
import WCS from '../../assets/WCS.png'
import kurokabe from '../../assets/kurokabe.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Mes récents travaux</h5>
      <h2>Projets</h2>

      <div className="container projects__container">
        <article className='project__item'>
          <div className="project__item-img">
            <img src={portfolio} alt="" />
          </div>
          <h3>Porfolio</h3>
          <div className="projects__item-cta">
            <a href="https://github.com/oussamablk-1/react-portfolio_website" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className="project__item-img">
            <img src={WCS} alt="" />
          </div>
          <h3>Site Full Stack Wild Code School</h3>
          <div className="projects__item-cta">
            <a href="https://github.com/oussamablk-1/WCS-exercice-site-Full-Stack" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className="project__item-img">
            <img src={einhar} alt="" />
          </div>
          <h3>Einhar</h3>
          <div className="projects__item-cta">
            <a href="https://github.com/Drakmain/Einhar" className='btn' target='_blank'>Github</a>          
          </div>
        </article>

        <article className='project__item'>
          <div className="project__item-img">
            <img src={kurokabe} alt="" />
          </div>
          <h3>Kurokabe</h3>
          <div className="projects__item-cta">
            <a href="https://github.com/Bouierck/Kurokabe" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=mwBdHmnsc00&ab_channel=NathanLABB%C3%89" className='btn btn-primary' target='_blank'>Démo Vidéo</a>        
          </div>
        </article>
 
      </div>
    </section>
  )
}

export default Projects