import React from 'react'
import Aboutsection from '../components/about-section/aboutsection'
import ContactSection from '../components/contact-section/contactsection'
import FooterSection from '../components/footer-section/footersection'
import MainSection from '../components/main-section/mainsection'
import NavBar from '../components/navbar/navbar'
import PersonalInfoSection from '../components/personalinfo-section/personalinfosection'
import ProjectSection from '../components/projects-section/projectsection'

const index = () => {
  return (
    <>
      <MainSection/>
      <NavBar/>
      <PersonalInfoSection/>
      <Aboutsection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default index
