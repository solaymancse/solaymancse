import React from "react";

import { Wrapper, Left, Right, H1, Span, Sign,Title,Img } from "./AboutElement";
import img from "../../assets/solayman.png";

export const About = () => {
  return (
    <>
      <Title>About Me</Title>
      <Wrapper>
        <Left>
          <Img src={img} alt="img" />
        </Left>
        <Right>
          <Span>Hello There !</Span>
          <H1>
            I'm Muhammad Solayman. I'm a Professional MERN Stack Web Developer.
            A Computer Science graduated with extensive Full Stack Web
            Development Experience. I have more than 2+ Years Experiences for
            building Professional,Good Looking and User-Friendly Responsive Web
            Application. I Have Strong Programming Skills.
            <br />
            <br />I am a Person Who is Puntual About My Duty. I Write Clean And
            Shortcode So That Anyone Can Review My Code. Client Satisfaction Is
            My first Priority and I Never Compromise With That.
          </H1>
          <Sign>
            <svg height="210" width="500">
              <line
                x1="50"
                y1="50"
                x2="300"
                y2="50"
                style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
              />
            </svg>
          </Sign>
        </Right>
      </Wrapper>
    </>
  );
};
