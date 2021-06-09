import React, { useRef, useEffect, useState } from 'react'
import Styles from './navbar.module.scss'
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Hamburger from 'hamburger-react'
const styles = {
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}
const NavBar = () => {
    const [fixeNav, setfixedNav] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const mobileOptionsContainer = useRef();
    const navbarRef = useRef(null);
    const navbarContainerRef = useRef(null);
    useEffect(() => {
        const onScrenChange = () => {
            if (window.screen.width > 600) {
                setOpen(false);
            }
        }
        const onScroll = () => {
            console.log(window.scrollY);
            if (navbarRef.current) {
                if (navbarRef.current.getBoundingClientRect().y < -10) {
                    navbarContainerRef.current.classList.add(`${Styles.fixedContainer}`);
                    return setfixedNav(true);
                }
                if (window.scrollY < 900) {
                    navbarContainerRef.current.classList.remove(`${Styles.fixedContainer}`);
                    setOpen(false);
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        window.addEventListener('resize', onScrenChange);

    })
    useEffect(() => {
        if (isOpen) {
            return mobileOptionsContainer.current.style.display = "flex";
        }
        return mobileOptionsContainer.current.style.display = "none";
    }, [isOpen])
    return (
        <StyleRoot>
            <div ref={navbarContainerRef} className={`${Styles.mainContainer}`}>
                <nav ref={navbarRef} className={`${Styles.navContainer}`} style={fixeNav ? styles.fadeInDown : null}>
                    <ul className={`${Styles.optionsList}`}>
                        <li><a href="#main"> Main</a></li>
                        <li><a href="#aboutme"> About me</a> </li>
                        <li><a href="#aboutwork"> About my skills </a></li>
                        <li><a href="#projects"> Projects</a></li>
                        <li><a href="#contact"> Contact</a></li>
                    </ul>
                    <div className={Styles.hamburger}>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </nav>
                <div ref={mobileOptionsContainer} className={Styles.mobileOptionsContainer} style={isOpen ? styles.fadeInDown : null}>
                    <ul className={`${Styles.mobileOptionsList}`}>
                        <li><a href="#main" onClick={()=>{setOpen(false)}}> Main</a></li>
                        <li><a href="#aboutme" onClick={()=>{setOpen(false)}}> About me</a> </li>
                        <li><a href="#aboutwork" onClick={()=>{setOpen(false)}}> About my skills </a></li>
                        <li><a href="#projects" onClick={()=>{setOpen(false)}}> Projects</a></li>
                        <li><a href="#contact" onClick={()=>{setOpen(false)}}> Contact</a></li>
                    </ul>
                </div>
            </div>
        </StyleRoot>
    )
}

export default NavBar
