import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import UkSupport from '../components/home/UkSupport'
import About from '../components/home/About'
import Universities from '../components/home/Universities'
import Gallery from '../components/home/Gallery'
import SuccessStories from '../components/home/SuccessStories'
import Branches from '../components/home/Branches'

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <UkSupport />
            <About />
            <Universities />
            <Gallery />
            <SuccessStories />
            <Branches />
        </main>
    )
}

export default Home
