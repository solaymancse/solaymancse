import React, { useState } from "react";

import {
  Wrapper,
  Left,
  Center,
  Right,
  H1,
  Links,
  ToogleBar,
  Title
} from "./NavbarELements";
import { GoThreeBars } from "react-icons/go";
import CV from "../../assets/Md_Solayman_Resume.pdf";
import { Offcanvas } from "react-bootstrap";
import { OffCanvasView } from './../OffCanvas/OffCanvasView';

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
          <Offcanvas style={{backgroundColor:"#212435"}}show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Title>Solayman.</Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <OffCanvasView/>
            </Offcanvas.Body>
          </Offcanvas>
        </ToogleBar>
      </Wrapper>
    </>
  );
};
