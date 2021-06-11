import React, { useEffect } from 'react'
import ProjectCard from './projectcard'
import Styles from './projectsection.module.scss'
const ProjectSection = () => {
    return (
        <section id="projects" className={`${Styles.mainContainer}`}>
            <div className={Styles.iconsContainer}>
                <img className={`${Styles.icon} ${Styles.icon1}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon2}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon3}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon4}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon5}`} src="./git-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon6}`} src="./git-icon.svg" alt="" srcset="" />
            </div>
            <div className={Styles.infoContainer}>
                <div className={`d-flex justify-content-center mb-3`}>
                    <h1 className={`${Styles.sectionTitle}`}>Projects</h1>
                </div>
                <div className={`row g-0 justify-content-center align-items-center mb-3`}>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Colectivo Mistico'} ProjectImage={'/colectivomistico-project.PNG'} Stack={`React/Next.js/Ghost.js/Bootstrap`} description={`website for store Colectivo Mistico`} projectUrl={"https://colectivo-mistico-sitioweb.vercel.app/"} SourceCodeUrl={"https://github.com/pabload/colectivo-mistico-sitioweb"} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Match pricer'} ProjectImage={'/matchpricer-project.PNG'} Stack={`React/Mongo/Express/Bootstrap`} description={`Tracker of prices`} projectUrl={"https://www.matchpricer.com/"} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Sopa Numerica'} ProjectImage={'/sopanumerica-project.PGN'} Stack={`React/express/socket.io/Bootstrap`} description={`Multiplayer game for practice aritmetics`} projectUrl={"https://sopanumerica.netlify.app/"} />
                    </div>
                </div>
                <div className={`row g-0 justify-content-center align-items-center mb-3`}>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Cuidado con el perro'} ProjectImage={'/ecommerce-project.PGN'} Stack={`React/firebase/Bootstrap`} description={`Simultation of a web ecommerce using Paypal API`} projectUrl={"https://bd-ecommerce-ropa.firebaseapp.com/"} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Personal portafolio'} ProjectImage={'/webportafolio-project.png'} Stack={`React/Next.js/Bootstrap`} description={`Personal portafolio using Next.js`} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                         <ProjectCard projectName={'Salsa Tepin'} ProjectImage={'/salsatepin-project.PNG'} Stack={`HTML/CSS/vanilla Javascript`} description={`Website for Salsa Tepin`} projectUrl={"https://www.salsatepin.com.mx/"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
