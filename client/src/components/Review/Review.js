import React from "react";

import Slider from "react-slick";
import { Img, Container,Desc,Div,Wrapper } from "./ReviewElements";
import { reviewData } from "../../Data";
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
    <Container>
     <h1>Client Review</h1>
     <Wrapper >
      <Slider {...settings} >
        {reviewData.map((data) => (
          <Div>
            <Img src={data.img} alt="1" />
            <Desc>"{data.desc}"</Desc>
          </Div>
        ))}
      </Slider>
     </Wrapper>
    </Container>
  );
};
