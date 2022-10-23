import styled from "styled-components";
import { maxLaptop, maxMobile, maxTablet } from "../../styles/breakpoints";

export const Container = styled.div`
  background: url("./images/intro-bg.png") no-repeat;
  background-size: 100% 80%;
  height: 100vh;
  width: 100%;
  position: relative;
`;
export const Wrapper = styled.div`
  height: 100%;
  padding: 100px 95px 30px 95px;
  display: flex;
  justify-content: space-between;

  @media ${maxTablet} {
    flex-direction: column-reverse;
  }

  @media ${maxMobile} {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  width: 50%;
  align-self: flex-end;
  font-weight: 300;
  font-size: 40px;
  color: #243466;
  text-transform: capitalize;

  @media ${maxTablet} {
    width: 100%;
  }

  @media ${maxMobile} {
    font-size: 28px;
  }
`;

export const ColoredTitle = styled.span`
  color: #3099e2;
  font-weight: 500;
`;
export const ImageWrapper = styled.div`
  width: 60%;
  position: relative;

  @media ${maxTablet} {
    width: 100%;
    height: 60%;
  }
`;

export const RightCloudWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 60%;
`;

export const LogosWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 95px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media ${maxTablet} {
    flex-direction: column;
    top: 5%;
    left: 25px;
  }

  @media ${maxMobile} {
    top: 5%;
    left: 25px;
    gap: 10px;
  }
`;
export const LogoWrapper1 = styled.div`
  position: relative;
  width: 310px;
  height: 89px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  @media ${maxTablet} {
    width: 300px;
    height: 80px;
  }

  @media ${maxMobile} {
    max-width: 200px;
    height: 60px;
  }
`;
export const LogoWrapper2 = styled.div`
  position: relative;
  width: 350px;
  height: 89px;
  padding: 13px 18px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  z-index: 2;

  @media ${maxTablet} {
    width: 300px;
    height: 80px;
  }

  @media ${maxMobile} {
    max-width: 200px;
    height: 60px;
  }
`;
export const PlusIcon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;
