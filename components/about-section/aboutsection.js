import React, { useEffect } from 'react'
import Styles from './aboutsection.module.scss'
import Image from 'next/image'
import SkillCard from './skillcard'
import AOS from 'aos'
const Aboutsection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            disable: 'mobile'
        });

    }, []);
    return (
        <section id="aboutwork" className={Styles.mainContainer} >
            <div className={Styles.iconsContainer}>
                <img className={`${Styles.icon} ${Styles.icon1}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon2}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon3}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon4}`} src="./fragment-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon5}`} src="./git-icon.svg" alt="" srcset="" />
                <img className={`${Styles.icon} ${Styles.icon6}`} src="./git-icon.svg" alt="" srcset="" />
            </div>
            <div className={Styles.infoContainer}>
                <h1 className={`${Styles.sectionTitle}`}><span>About</span> My skills</h1>
                <div className={`row justify-content-center align-items-center mt-5`}>
                    <div data-aos="fade-right" className={`col-lg-3 col-6`}>
                        <div className={`${Styles.circularContainer} `}>
                            <Image
                                alt="Mountains"
                                src="/multiplatform-icon.svg"
                                layout="intrinsic"
                                width={83}
                                height={61}
                            />
                        </div>
                        <h2 className={`${Styles.textTitle}`}>Multi-platfrom</h2>
                        <p className={`${Styles.infoText}`}>

                            I build applications compatible with most devices
                            </p>
                    </div>
                    <div data-aos="fade-right" className={`col-lg-3 col-6`}>
                        <div className={`${Styles.circularContainer}`}>
                            <Image
                                alt="Mountains"
                                src="/frontend-icon.svg"
                                layout="intrinsic"
                                width={83}
                                height={61}
                            />
                        </div>
                        <h2 className={`${Styles.textTitle}`}>Front-end</h2>
                        <p className={`${Styles.infoText}`}>

                            I have worked with technologies such as react, angular, flutter based on responsive design
                        </p>
                    </div>
                    <div data-aos="fade-right" className={`col-lg-3 col-6`}>
                        <div className={`${Styles.circularContainer}`}>
                            <Image
                                alt="backend"
                                src="/backend-icon.svg"
                                layout="intrinsic"
                                width={83}
                                height={61}
                            />
                        </div>
                        <h2 className={`${Styles.textTitle}`}>Back-end</h2>
                        <p className={`${Styles.infoText}`}>
                            I have knowledge of sql, and not sql like mongo, I have made projects using the MERN stack
                        </p>
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center mt-3 `}>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'HTML'} details={'Layout and structure of websites'} url={'/html-skill.svg'} progress={100} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'CSS'}
                            details={'Design modules, animations and web interfaces'} url={'/CSS-skill.svg'} progress={70} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'JavaScript'} details={'Logic, ecmascript 6, functions, async / await'} url={'/javascript-skill.svg'} progress={80} />
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center mt-3`}>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'Node.js'} details={'Rest Apis, authentication, database management'} url={'/nodejs-skill.svg'} progress={70} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'Git'} details={'Individual and cooperative workflow control'} url={'/git-skill.svg'} progress={70} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'React.js'} details={'Use of hooks, state management, component construction'} url={'/react-skill.svg'} progress={86} />
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center mt-3`}>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'Java'} details={'Understanding of object-oriented programming'} url={'/java-skill.svg'} progress={70} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'SQL'} details={'Queries, creation of tables and databases, stored procedure'} url={'/Sql-skill.svg'} progress={70} />
                    </div>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'Bootstrap'} details={'Grid system management, responsive design'} url={'/Bootstrap-skill.svg'} progress={90} />
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center mt-3`}>
                    <div className={`col-lg-3`}>
                        <SkillCard skill={'Flutter'} details={'State management with BLOC, layout, dart knowledge'} url={'/flutter-skill.svg'} progress={80} />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Aboutsection
