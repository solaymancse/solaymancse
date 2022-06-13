import React, { useState } from "react";

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
import { Offcanvas } from "react-bootstrap";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Links to="/projects">Project</Links>
        </Center>
        <Right>
          <a href={CV} download>
            DOWNLOAD CV
          </a>
        </Right>
        <ToogleBar>
          <GoThreeBars onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </ToogleBar>
      </Wrapper>
    </>
  );
};
