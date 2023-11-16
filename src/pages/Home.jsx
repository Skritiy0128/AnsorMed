import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Services/>
            <Cta/>
            <Footer/>
        </>
    )
}

export default Home