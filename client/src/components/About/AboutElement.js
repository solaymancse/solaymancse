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
border-bottom: 0.5px solid #6c757d;
 width: 300px;
 height: 120px;
`;
export const Title = styled.h1`
  height: 10vh;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  margin-left: 10px;
`;
export const Signature = styled.img`
 width: 300px;
 height: 170px;
`;
