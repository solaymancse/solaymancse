import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0 100px;

  @media (min-width: 575px) and (max-width:768px) {
    flex-direction: column;
    text-align: center;
    }
@media (min-width: 320px) and (max-width: 480px){
    flex-direction: column;
    padding: 0 10px;
}
`;

export const Left = styled.div`

@media (min-width: 320px) and (max-width: 480px){
    width: 100%;
    margin-bottom: 20px;
}
`;
export const Img = styled.img`
@media (min-width: 320px) and (max-width: 480px){
    width: 100%;
}
`;
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
  margin-left: 10px;
`;
