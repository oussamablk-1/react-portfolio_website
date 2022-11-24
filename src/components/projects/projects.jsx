import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Mes récents travaux</h5>
      <h2>Projets</h2>

      <div className="container projects__container">
        <article className='project__item'>
          <div className="project__item-img">
            <h3>Einhar</h3>
            <a href="https://github.com/oussamablk-1/react-portfolio_website">Portfolio</a>
            <a href="https://github.com/oussamablk-1/WCS-exercice-site-Full-Stack">Site Full Stack Wild Code School</a>
            <a href="https://github.com/Drakmain/Einhar">Einhar</a>
            <a href="https://github.com/Bouierck/Kurokabe">Kurokabe</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects