import React from 'react'
import { About } from '../components/About/About'
import { HomeSection } from '../components/HomeSection/HomeSection'
import { Navbar } from '../components/Navbar/Navbar'
import { Projects } from '../components/Projects/Projects';
import { Services } from '../components/Services/Services';
import { Compare } from './../components/Compare/Compare';
import { Tutorial } from './../components/Tutorial/Tutorial';
import { Review } from './../components/Review/Review';
import { GetInTouch } from '../components/GetInTouch/GetInTouch';
import { Footer } from '../components/Footer/Footer';
import { CopyRight } from '../components/CopyRight/CopyRight';

export const Home = () => {
  return (
    <div> 
        <Navbar/>
        <HomeSection/>
        <About/>
        <Compare/>
        <Projects/>
        <Services/>
        <Tutorial/>
        <Review/>
        <GetInTouch/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}
