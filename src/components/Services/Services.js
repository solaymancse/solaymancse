import React from "react";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { serviceData } from "../../Data";
import {
  Wrapper,
  Content,
  Icon,
  Code,
  CardBox,
  H2,
  H1,
  Order,
  ReactIcon
} from "./ServicesElements";
import { AiOutlineHeart } from "react-icons/ai";

export const Services = () => {
  return (
    <Wrapper>
      <h1>Services</h1>
      <Content>
        {serviceData.map((data) => (
          <CardBox style={{ backgroundColor: "#2D343E", textAlign: "center" }}>
            <Icon>{data.icon}</Icon>
            <CardContent>
              <Code>{data.title}</Code>
              <H2>{data.h2}</H2>
              <Typography variant="body2" color="#fff">
                {data.desc}
              </Typography>
            </CardContent>

            <Order>
              <ReactIcon><AiOutlineHeart /></ReactIcon>
              <H1>Order Now</H1>
            </Order>
          </CardBox>
        ))}
      </Content>
    </Wrapper>
  );
};
