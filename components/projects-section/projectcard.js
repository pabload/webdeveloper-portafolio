import React, {useEffect} from 'react'
import Styles from './projectsection.module.scss'
import AOS from 'aos'
const ProjectCard = ({ projectName, ProjectImage, Stack, description, projectUrl, SourceCodeUrl }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            disable: 'mobile'
        });

    }, []);
    return (
        <div data-aos="zoom-in" className={`${Styles.cardContainer}`}>
            <img src={ProjectImage} alt="project" className={`${Styles.projectImage}`} />
            <div class={`${Styles.hoverContainer}`}>
                <div className={`${Styles.cardInfoContainer}`}>
                    <h3 className={`${Styles.cardTitle}`}>{projectName}</h3>
                    <p className={`${Styles.cardStack}`}>{Stack}</p>
                    <p className={`${Styles.cardDescription}`}>{description}</p>
                </div>
                {
                    projectUrl ?
                        <div className={`${Styles.projectButton} mb-2`}>
                            <a href={projectUrl} target="_blank">view project</a>
                        </div> :
                        null
                }
                {
                    SourceCodeUrl ?
                        <div className={`${Styles.projectButton}`}>
                            <a href={SourceCodeUrl} target="_blank"> Source code</a>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ProjectCard
