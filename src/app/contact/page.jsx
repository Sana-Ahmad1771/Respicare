import React from 'react'
import Header from '../components/common/Header'
import ContactInfo from '../components/pages/contact/ContactInfo'
import Footer from '../components/common/Footer'
import ContactFormSection from '../components/pages/contact/ContactFormSection'
import { ContactHero } from '../components/pages/contact/ContactHero'

const page = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <ContactInfo />
      <Footer />
    </>
  )
}

export default page
