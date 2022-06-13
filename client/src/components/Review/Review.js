import React from "react";

import Slider from "react-slick";
import { Img, MainDiv, Desc, Div, Wrapper, H1 } from "./ReviewElements";
import { reviewData } from "../../Data";
import { Container } from "react-bootstrap";

export const Review = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainDiv>
      <Container>
        <H1>Client Review</H1>
        <Wrapper>
          <Slider {...settings}>
            {reviewData.map((data) => (
              <Div>
                <Img src={data.img} alt="1" />
                <Desc>"{data.desc}"</Desc>
              </Div>
            ))}
          </Slider>
        </Wrapper>
      </Container>
    </MainDiv>
  );
};
