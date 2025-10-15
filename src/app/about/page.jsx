import React from 'react'
import { AboutUs } from '../components/pages/about/AboutUs'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import AboutCompany from '../components/pages/about/AboutCompany'
import VissionSection from '../components/pages/about/VissionSection'
import MisionSection from '../components/pages/about/MissionSection'

const page = () => {
  return (
    <>
    <Header />
    <AboutUs />
    <AboutCompany />
    <VissionSection />
    <MisionSection />
    <Footer />
    </>
  )
}

export default page
