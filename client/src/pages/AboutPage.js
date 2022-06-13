import React from 'react'
import { StickyNavbar } from '../components/StickyNavbar/StickyNavbar';
import { Container } from 'react-bootstrap';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { About } from '../components/About/About';
import { CopyRight } from '../components/CopyRight/CopyRight';

export const AboutPage = () => {
  return (
    <div>
        <StickyNavbar/>
        <Container>
            <Navbar/>
            <About/>
        </Container>
            <Footer/>
            <CopyRight/>
    </div>
  )
}
