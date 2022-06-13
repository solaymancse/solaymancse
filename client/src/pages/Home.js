import React from "react";
import { About } from "../components/About/About";
import { HomeSection } from "../components/HomeSection/HomeSection";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import { Services } from "../components/Services/Services";
import { Compare } from "./../components/Compare/Compare";
import { Tutorial } from "./../components/Tutorial/Tutorial";
import { Review } from "./../components/Review/Review";
import { GetInTouch } from "../components/GetInTouch/GetInTouch";
import { Footer } from "../components/Footer/Footer";
import { CopyRight } from "../components/CopyRight/CopyRight";
import { Container } from 'react-bootstrap';
import { StickyNavbar } from "../components/StickyNavbar/StickyNavbar";





export const Home = () => {
  return (
    <div>
      <StickyNavbar/>
      <Container>
        <Navbar />
        <HomeSection />
        <About />
        <Compare />
        <Projects />
        <Services />
        <Tutorial />
      </Container>
      <Review />
      <Container>
      <GetInTouch />
      </Container>
      <Footer />
      <CopyRight />
    </div>
  );
};
