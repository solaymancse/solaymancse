import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0;
  padding: 10px 250px;
  background: #44A08D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #093637, #44A08D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #093637, #44A08D); 

@media (min-width: 576px) and (max-width: 768px){
  margin: 20px 0px;
  padding: 10px 50px;
}
@media (min-width: 320px) and (max-width: 480px){
  margin: 20px 10px;
  padding: 10px;
}

`;
export const Wrapper = styled.div`
  margin: 20 250px;
  @media (min-width: 320px) and (max-width: 480px){
    margin: 0;
}
`;
export const Div = styled.div`

  width: 100%;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px){
    margin: 0;
}
`;
export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 70px;
`;
export const Desc = styled.p`
  width: 500px;
  margin: 0px auto 60px;
  font-weight: normal;
  font-size: 16px;
  color: #A5892F;
  @media (min-width: 320px) and (max-width: 480px){
    width: 100%;
    padding:  0 10px;
}

`;
export const H1 = styled.h1`
 
  font-weight: normal;
  font-size: 16px;

  @media (min-width: 320px) and (max-width: 480px){
    text-align: center;
    margin-bottom: 30px;
  }

`;
