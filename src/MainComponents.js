import React from "react";

import { Home } from "./pages/Home";
import styled from "styled-components";

export const MainComponents = () => {
  const Container = styled.div`
    margin: 0 250px;

    @media (min-width: 1024px) and (max-width: 1200px) {
      margin: 0 80px;
    }

    @media (min-width: 991px) and (max-width: 1024px) {
      margin: 0 80px;
    }
    @media (min-width: 481px) and (max-width: 575px) {
      margin: 10px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      margin: 0;
    }
  `;
  return (
    <Container>
      <Home />
    </Container>
  );
};
