import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Revenue from './Revenue'
import Navigate from './Navigate'
import Seller from '../Home/Sellerr'
import Footer from '../Home/Newfooter'
import Faq from './Faq'



export default function index() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Seller />
            <Revenue />
            <Navigate />
            <Faq />

            <Footer />


        </div>
    )
}
