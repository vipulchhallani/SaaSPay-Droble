import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from '../Home/Newfooter'
import Fits from './Fits'
import Intigration from './Intigration'
import Builder from './Builder'
import Bussiness from './Bussiness'
import Faq from './Faq'


export default function index() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Fits />
            <Bussiness />
            <Intigration />
            <Builder />
            <Faq />

            <Footer />


        </div>
    )
}
