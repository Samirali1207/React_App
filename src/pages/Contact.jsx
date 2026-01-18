import React from 'react'

import UpperNav from '../components/UpperNav'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <>
            <UpperNav />
            <Navbar />
            <ContactHeader />
            <ContactForm/> 
            <Footer />
        </>
    )
}

export default Contact