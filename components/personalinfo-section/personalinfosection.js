import React from 'react'
import Image from 'next/image'
import Styles from './personalinfosection.module.scss'
const PersonalInfoSection = () => {
    return (
        <section id="aboutme" className={`  ${Styles.mainContainer}`}>
            <div className={`row w-100 h-100 justify-content-center align-items-center`}>
                <div className="col-lg-6">
                    <h1>
                        Hello , im a web developer from Mexico , i consider myself as a responsible and autodidact person,
                        always excited to learn new technologies
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfoSection
