import React from "react";

import {
  Wrapper,
  Left,
  Center,
  Right,
  H1,
  Links,
  ToogleBar,
} from "./NavbarELements";
import { GoThreeBars } from "react-icons/go";
import CV from "../../assets/Md_Solayman_Resume.pdf";

export const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <H1>Solayman.</H1>
        </Left>
        <Center>
          <Links to="/">Home</Links>
          <Links to="/about">About</Links>
          <Links to="/services">Services</Links>
          <Links to="/contact">Contact</Links>
          <Links to="/project">Project</Links>
        </Center>
        <Right>
          <a href={CV} download>
            DOWNLOAD CV
          </a>
        </Right>
        <ToogleBar>
          <GoThreeBars />
        </ToogleBar>
      </Wrapper>
    </>
  );
};
