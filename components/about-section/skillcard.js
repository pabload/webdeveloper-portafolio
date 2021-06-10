import React, { useState, useEffect } from 'react'
import Styles from './aboutsection.module.scss'
import Image from 'next/image'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const SkillCard = ({ skill, details, url, progress }) => {
    const [stateProgress, setStateprogress] = useState();
    useEffect(() => {
        if (stateProgress < progress) {
            console.log('entro');
            setTimeout(function () {
                console.log('HOLA MUNDO');
                //setStateprogress(stateProgress + 20);
            }, 2000);
        }
    }, [progress])
    return (
        <div onMouseOver={() => { setStateprogress(0) }} className={`${Styles.flipCard}`}>
            <div className={`${Styles.flipCardInner}`}>
                <div className={`${Styles.flipCardFront} rounded`}>
                    <h3> {skill}</h3>
                    <div className={`row`}>
                        <div className={`col-lg-6 col-6`}>
                            <p className={`${Styles.cardDetails}`}>{details}</p>
                        </div>
                        <div className={`col-lg-6 col-6`}>
                            <Image
                                alt="skill "
                                src={url}
                                layout="intrinsic"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${Styles.flipCardBack} rounded`}>
                    <div className={`${Styles.ProgressBarContainer}`} >
                        <CircularProgressbar value={progress} text={`${progress}% learned`} styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '10px',
                            pathTransitionDuration: 5,
                            pathColor: `rgba(41, 161,156, ${progress / 100})`,
                            textColor: '#393e46',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
