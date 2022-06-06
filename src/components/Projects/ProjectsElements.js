import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 20px;
`;
export const H1 = styled.h1`
  margin-top: 150px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 50px;
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    padding: 5px 15px;
    border: 0.5px solid #fff;
    border-radius: 15px;
  }
  a:hover {
    background-color: #009572;
    border-color: #009572;
    transition: 0.5s;
  }
`;
