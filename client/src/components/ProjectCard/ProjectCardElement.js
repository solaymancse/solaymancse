import styled from "styled-components";
import Card from "@mui/material/Card";
export const CardBox = styled(Card)`
  flex: 1;
`;
export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`;
export const Code = styled.div`
  display: flex;
  justify-content: center;
`;
export const Desc = styled.p`
  font-size: 15px;
  border: .5px solid #fff;
  padding: 7px;
  margin-right: 5px;
  border-radius: 20px;
  text-transform: uppercase;
  color: #fff;
`;
export const Links = styled.a`
    border: none;
    padding: 5px 10px;
    background-color: #009572;
    color: #fff;
    text-decoration: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
   
    a{
    color: #fff;
    text-decoration: none;
    }

`;
