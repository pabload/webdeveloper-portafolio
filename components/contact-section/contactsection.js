import React, { useState,useEffect } from 'react'
import Styles from './contactsection.module.scss'
import { useForm, ValidationError } from '@formspree/react';
const ContactSection = () => {
    const [state, handleSubmit] = useForm("moqyaokd");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [formError, setformError] = useState(false);
    const validateFields = async (e) => {
        setformError(false);
        e.preventDefault();
        if (name == '' || email == '' || message == '') {
            return setformError(true);
        }
        await handleSubmit(e);
        setName('');
        setEmail('');
        setMessage('');
    }
    const succeedSubmit = () => {
        return <div className={`${Styles.successContainer}`}>
            <h1>!message sent successfully¡</h1>
        </div>
    }
    const contactForm = () => {
        return <form className={`${Styles.formContainer}`} onSubmit={validateFields}>
            {
                formError ?
                    <div className={`${Styles.alertBox} mb-3 rounded`}>
                        you need to fill all the fields
                    </div>
                    :
                    null
            }
            <input
                className={`${Styles.formInputs} rounded`}
                onChange={event => setName(event.target.value)}
                placeholder="Name"
                id="name"
                type="text"
                name="name"
            />
            <input
                className={`${Styles.formInputs} rounded`}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                id="email"
                type="email"
                name="email"
            />
            <textarea onChange={event => setMessage(event.target.value)} className={`${Styles.formInputs}`} placeholder="Your message" id="message"
                name="message" ></textarea>
            <button type="submit" disabled={state.submitting} className={`${Styles.formButton} rounded-pill shadow`}>Submit</button>
        </form>
    }
    return (
        <section id="contact" className={`${Styles.mainContainer}`}>
            <section className={Styles.mainContainer} >
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
                        <h1 className={`${Styles.sectionTitle}`}>Contact</h1>
                    </div>
                    <div className={`d-flex justify-content-center mb-3`}>
                        <span className={`${Styles.subTitle}`}>Work together?</span>
                    </div>
                    <div className={`row justify-content-center`}>
                        <div className={`col-lg-6`}>
                            {
                                state.succeeded ?
                                    succeedSubmit()
                                    :
                                    contactForm()

                            }
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ContactSection
