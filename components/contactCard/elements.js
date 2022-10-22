import styled from "styled-components";
import { maxMobile } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 30%;
  z-index: 3;

  @media ${maxMobile} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 40px;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  width: 59px;
  height: 57px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 75px;
`;

export const BottomBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: #00c7c5;
  border-radius: 20px;
`;
