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
                <div className={`row g-0 justify-content-center align-items-center`}>
                    <div className={`col-lg-3  col-10`}>
                        <ProjectCard projectName={'Colectivo Mistico'} ProjectImage={'/colectivomistico-project.svg'} Stack={`React/Next.js/Ghost.js/Bootstrap`} description={`website for store Colectivo Mistico`} projectUrl={"https://colectivo-mistico-sitioweb.vercel.app/"} SourceCodeUrl={"https://github.com/pabload/colectivo-mistico-sitioweb"} />
                    </div>
                    <div className={`col-lg-3  col-10`}>
                        <ProjectCard projectName={'Match pricer'} ProjectImage={'/matchpricer-project.svg'} Stack={`React/Mongo/Express/Bootstrap`} description={`Tracker of prices`} projectUrl={"https://match-pricer.netlify.app/"} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Sopa Numerica'} ProjectImage={'/sopanumerica-project.svg'} Stack={`React/express/socket.io/Bootstrap`} description={`Multiplayer game for practice aritmetics`} projectUrl={"https://sopanumerica.netlify.app/"} />
                    </div>
                </div>
                <div className={`row g-0 justify-content-center align-items-center`}>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Cuidado con el perro'} ProjectImage={'/ecommerce-project.svg'} Stack={`React/firebase/Bootstrap`} description={`Simultation of a web ecommerce using Paypal API`} projectUrl={"https://bd-ecommerce-ropa.firebaseapp.com/"} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Personal portafolio'} ProjectImage={'/webportafolio-project.svg'} Stack={`React/Next.js/Bootstrap`} description={`Personal portafolio using Next.js`} />
                    </div>
                    <div className={`col-lg-3 col-10`}>
                        <ProjectCard projectName={'Comments APP'} ProjectImage={'/react-comments-project.png'} Stack={`React/TypeScript/Express/MySQL`} description={`App for simulate a comment system`} projectUrl={"https://reactcoommetsapp.netlify.app/"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
