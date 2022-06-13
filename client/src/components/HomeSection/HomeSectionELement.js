import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;

  


  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: auto;
    gap: 30px;
    margin-bottom: 50px;
  }
`;
export const Left = styled.div`
margin-top: 100px;
  width: 100%;
  padding: 20px 0;
  flex: 1;


  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const H1 = styled.h1`
    font-size: 65px;
    color: grey;
`;
export const H2 = styled.h2``;
export const Span = styled.span`
  font-size: 65px;
  line-height: 170px;
  color: #009572;

  
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
    line-height: 70px;
  }
`;
export const Right = styled.div`
  flex: 1;
  width: 100%;
  margin: auto;

`;
export const Links = styled(NavLink)``;
export const Div = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    padding: 15px;
    background-color: #009572;
    margin-right: 15px;
    border-radius: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
      padding: 10px;
    }
  }
`;
