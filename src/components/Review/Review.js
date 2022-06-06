import React from "react";

import Slider from "react-slick";
import { Img, Container,Desc,Div } from "./ReviewElements";
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
      <Slider {...settings} style={{marginTop:"100px"}}>
        {reviewData.map((data) => (
          <Div>
            <Img src={data.img} alt="1" />
            <Desc>"{data.desc}"</Desc>
          </Div>
        ))}
      </Slider>
    </Container>
  );
};
