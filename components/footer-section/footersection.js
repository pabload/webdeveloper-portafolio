import React from 'react'
import Styles from './footersection.module.scss'
const FooterSection = () => {
    return (
        <footer className={`${Styles.mainContainer}`}>
            <div className={`${Styles.gobackContainer} shadow`}>
            <a href="#top">
            <img src="./uparrow.svg" alt="" />
            </a>
            </div>
            <span>JUAN PABLO ARMENTA ©2021</span>
        </footer>
    )
}

export default FooterSection
