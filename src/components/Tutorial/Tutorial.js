import React from "react";

import Slider from "react-slick";
import { H1,Img,H3 } from "./TutorialElements";
import img2 from "../../assets/img2.jpg";
import { Links } from './../Projects/ProjectsElements';
export const Tutorial = () => {
  const SliderData = [
    {
      img: `${img2}`,
      title: "Relief Fund In Place At Alister Bank: How You Can Help",
    },
    {
      img: `${img2}`,
      title: "When NOT Using Credit Cards Can Hurt You",
    },
    {
      img: `${img2}`,
      title: "Keep Your Children Safe From Financial Fraud",
    },
    {
      img: `${img2}`,
      title: "You're Making More Money Here's How to Solve",
    },
    {
      img: `${img2}`,
      title: "Help and Guidance: Personal Financial Advice Service",
    },
    {
      img: `${img2}`,
      title: "Keep Your Children Safe From Financial Fraud",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <H1>Tutorial</H1>
      <Slider {...settings}>
        {SliderData.map((data) => (
          <div>
            <Img src={data.img} alt="1" />
            <H3>{data.title}</H3>
          </div>
        ))}
      </Slider>
      <Links><a href='/'>See All</a></Links>
    </div>
  );
};
