import styled from "styled-components";
import { maxLaptop, maxMobile, maxTablet } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 51px 90px 103px 90px;

  @media ${maxLaptop} {
    padding: 51px 30px 40px 30px;
  }

  @media ${maxTablet} {
    padding: 51px 20px 40px 20px;
  }

  @media (max-width: 650px) {
    margin-bottom: 180px;
  }
`;
export const Wrapper = styled.div``;

export const Title = styled.h1`
  max-width: 70%;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  color: #000000;
  margin-bottom: 74px;
  text-transform: capitalize;

  @media (max-width: 650px) {
    max-width: 100%;
    font-size: 26px;
    line-height: 36px;
  }
`;

export const BoldTitle = styled.span`
  font-weight: 500;
`;

export const ContentWrapper = styled.div`
  padding: 0px 125px;

  @media ${maxLaptop} {
    padding: 0px 70px;
  }

  @media ${maxTablet} {
    padding: 0px 10px;
  }
`;

export const ContentRow = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 3%;
  margin-top: 15px;

  @media ${maxMobile} {
    display: none;
  }
`;
export const IconHexagonWrapper = styled.div`
  position: absolute;
  top: -10%;
  left: -40%;
`;
export const Icon = styled.div``;

export const Text = styled.p`
  width: 95%;
  font-size: 18px;
  line-height: 27px;
  color: #000;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const OptionsTextWrapper = styled.div`
  width: 30%;

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const OptionsImagesWrapper = styled.div`
  width: 65%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SingleOption = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.bg && "#C1C5CD"};
  border-radius: 10px;
`;
