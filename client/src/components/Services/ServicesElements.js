import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
`;
export const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;
export const Icon = styled.div`
  margin-top: 30px;
  font-size: 35px;
  text-align: center;
  color: #009572;
`;
export const Code = styled.h2`
  color: #fff;
  font-size: 16px;
`;
export const H2 = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: normal;
`;
export const H1 = styled.h1`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  background-color: #009572;
  width: 150px;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 0 auto;

  &:hover {
    color: #fff;
    background-color: #333;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const Order = styled.div`
  background-color: #f0e9dc;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  display: none;
`;
export const ReactIcon = styled.div`
  color: #333;
  font-size: 30px;
`;
export const CardBox = styled.div`
  width: 412px;
  background-color: #2d343e;
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 10px 20px;
  align-items: center;

  &:hover ${Order} {
    display: flex;
    transition: 0.3s;
  }
`;
