import React from 'react'
import Navbar from './Navbar'
import Newfooter from './Newfooter'
import Hero from './Hero'
import Introducing from './Introducing'
import Seller from './Sellerr'
import Faq from './Faq'
import Changing from './Changing'


export default function index() {
    return (
        <div>
            <div className=' bg-primary-vdark  ' >
                <Navbar />
                <Hero />
            </div>
            <Seller />
            <Changing />
            <Introducing />
            <Faq />
            <Newfooter />

        </div>
    )
}
