import React from 'react'

import  CV  from '../../assets/Md_Solayman_Resume.pdf'
import { Wrapper,Left,Right,H2,H1, Span,Div} from './HomeSectionELement'
import { Typewriter } from 'react-simple-typewriter'
import {Carousel} from '3d-react-carousal';

export const HomeSection = () => {
  let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/301/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/300/?random" alt="5" />   ];

  return (
    <Wrapper>
        <Left>
            <H2>Hello !</H2>
            <H1>I'm a <br/><Span>
            <Typewriter
            words={['Web Developer.', 'Web Designer.', 'Programmer.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
          </Span></H1>
            <Div>
                <a href={CV} download>Download CV</a>
                <a href='/contact'>Contact Me</a>
            </Div>
        </Left>
        <Right>
        <Carousel slides={slides} autoplay={true} interval={1000}/>
            
        </Right>


    </Wrapper>
  )
}
