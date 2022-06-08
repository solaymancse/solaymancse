import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0 100px;

@media (min-width: 320px) and (max-width: 480px){
    flex-direction: column;
}
`;

export const Left = styled.div``;
export const Right = styled.div``;
export const H1 = styled.h1`
  color: grey;
  font-size: 18px;
  text-align: justify;
  font-weight: normal;
`;
export const Span = styled.h1`
  color: grey;
`;
export const Sign = styled.div`
  color: grey;
`;
export const Title = styled.h1`
  height: 10vh;
  font-family: "Poppins", sans-serif;

  font-weight: normal;
`;
