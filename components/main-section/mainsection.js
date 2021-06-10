import React from 'react'
import Image from 'next/image'
import Styles from './mainsection.module.scss'
import Link from 'next/link'
const MainSection = () => {
    return (
        <main id="main" className={Styles.mainSectionContainer}>
            <div className={Styles.bgWrap}>
                <Image
                    alt="background"
                    src="/mainsection-background.svg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={Styles.iconsContainer}>
                <img className={`${Styles.icon} ${Styles.icon1}`} src="./fragment-icon.svg" alt="" />
                <img className={`${Styles.icon} ${Styles.icon2}`} src="./fragment-icon.svg" alt="" />
                <img className={`${Styles.icon} ${Styles.icon3}`} src="./fragment-icon.svg" alt="" />
                <img className={`${Styles.icon} ${Styles.icon4}`} src="./fragment-icon.svg" alt="" />
                <img className={`${Styles.icon} ${Styles.icon5}`} src="./git-icon.svg" alt="" />
                <img className={`${Styles.icon} ${Styles.icon6}`} src="./git-icon.svg" alt="" />
            </div>
            <div className={Styles.infoContainer}>
                <div className="row">
                    <div className={`col-lg-7  col-md-7`}>
                        <h1 className={`${Styles.mainText} animate__animated animate__bounce animate__faster`}>Hi , I'm <span className={Styles.coloredText}>Juan Pablo</span>
                            <br />
                         & I'm a <span className={Styles.coloredText}>Web Developer</span></h1>
                        <div className={`${Styles.buttonsContainer}`}>
                            <a className={`${Styles.mainButton} rounded-pill shadow `} href="#aboutwork">
                                Check my work
                            </a>
                            <a className={`${Styles.mainButton} rounded-pill shadow`} href="./cv-pablo.pdf" target="_blank" download>Download CV</a>
                        </div>
                    </div>
                    <div className={`${Styles.sideImageContainer}   col-lg-5 col-md-5 `}>
                        <Image
                            alt="Mountains"
                            src="/mainsection-sidesvg.svg"
                            layout="intrinsic"
                            width={700}
                            height={475}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainSection
