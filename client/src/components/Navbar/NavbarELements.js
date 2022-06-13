import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px 10px;
  }
`;
export const Left = styled.div``;
export const H1 = styled.h1`
  font-size: 24px;
  color: #009572;

  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
`;
export const Center = styled.div`
  display: inline-block;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: grey;
  margin: 0 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 0 15px;
  }

  &:after {
    content: "";
    height: 2px;
    width: 0;
    background-color: #fff;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: 0.3s;
  }

  &:hover:after{
    width: 100%;
  }
`;
export const Right = styled.div`
  border: 0.3px solid #fff;
  padding: 10px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #009572;
    border-color: #009572;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const ToogleBar = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;
