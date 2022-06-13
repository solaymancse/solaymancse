import React, { useEffect, useState } from "react";

import '../App.css'
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
import { Container } from "react-bootstrap";
import { StickyNavbar } from "../components/StickyNavbar/StickyNavbar";
import styled from 'styled-components';



export const Home = () => {
  const [done, setDone] = useState(undefined);
  const H3 = styled.h3`
  
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 30%;

  font-size: 14px;
  
  `
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 4000);
  }, []);
  return (
    <>
      {!done ? (
       <div>
          <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <H3>"And He found you lost and guided [you]"</H3>
       </div>
      ) : (
        <div>
          <StickyNavbar />
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
      )}
    </>
  );
};
