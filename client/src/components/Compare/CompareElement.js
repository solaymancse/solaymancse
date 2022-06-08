import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 150px 0;
  width: 100%;
  display: flex;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 480px){
    flex-direction: column;
}

`;
export const Div = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const Icon = styled.div`
  font-size: 40px;
  color: #009572;
`;
export const Title = styled.h1`
  font-size: 16px;
`;
export const Desc = styled.div`
  font-size: 48px;
  color: #009572;
`;
