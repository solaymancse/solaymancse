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
import styled from 'styled-components';





export const Home = () => {
  const Container = styled.div`
    margin: 0 250px;

    @media (min-width: 1024px) and (max-width: 1200px) {
      margin: 0 80px;
    }

    @media (min-width: 991px) and (max-width: 1024px) {
      margin: 0 80px;
    }
    @media (min-width: 575px) and (max-width:768px) {
      margin: 10px 30px;
    }
    @media (min-width: 481px) and (max-width: 574px) {
      margin: 10px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      margin: 0 10px;
    }
  `;
  return (
    <div>
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
      <container>
      <GetInTouch />
      </container>
      <Footer />
      <CopyRight />
    </div>
  );
};
