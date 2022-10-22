import styled from "styled-components";
import { maxMobile } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  max-width: 480px;

  @media (${maxMobile}) {
    width: 100%;
  }
`;

export const HexagonTextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -50px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: ${(props) => props.bg};
  width: 388px;
  height: 336px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 40px;
  text-align: center;

  @media (${maxMobile}) {
    width: 100%;
    height: 280px;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SmallHexagon = styled.div`
  position: absolute;
  bottom: 5%;
  right: -50px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  width: 145px;
  height: 126px;
  background-color: #5d85ff;

  @media (${maxMobile}) {
    display: none;
  }
`;
