import React, { useEffect } from 'react'
import Styles from './projectsection.module.scss'
const ProjectCard = ({ projectName, ProjectImage, Stack, description, projectUrl, SourceCodeUrl }) => {
    return (
        <div className={`${Styles.cardContainer}`}>
            <img className={`${Styles.projectImage}`} src={ProjectImage} alt="project" srcSet="" />
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
