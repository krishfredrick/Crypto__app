import React from 'react'
import Header from '../components/Containers/Header';
import LandingIntro from '../components/LandingPage/Intro';
import Footer from '../components/Containers/Footer';

function Home() {
  return (
    <div>
        <Header/>
        <div className="bg__gradient">
        <LandingIntro />
        <Footer />
        </div>
    </div>
  )
}

export default Home;