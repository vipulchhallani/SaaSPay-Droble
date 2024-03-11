import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Seller from './Sellerr'
import Holdingback from './Holdingback'
import Faq from './Faq'
import Streamlining from './Streamlining'
import Localise from './Localise'
import Footer from '../Home/Newfooter'


export default function index() {
    return (
        <div>
            <div className=' bg-primary-vdark  ' >
                <Navbar />
                <Hero />
            </div>
            <Seller />
            <Holdingback/>
            <Streamlining/>
            <Localise/>
            <Faq />
            <Footer/>
     

        </div>
    )
}
