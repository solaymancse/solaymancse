import React from "react";

import { Wrapper,Div ,Icon,Title,Desc} from "./CompareElement";
import  {compareData}  from "../../Data";
import CountUp from 'react-countup';

export const Compare = () => {
  return (
    <Wrapper>
      {compareData.map((data,index) => (
        <Div key={index}>
            <Icon>{data.icon}</Icon>
            <Title>{data.title}</Title>
            <Desc><CountUp end={data.end} />+</Desc>
        </Div>
      ))}
    </Wrapper>
  );
};
