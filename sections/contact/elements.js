import styled from "styled-components";
import { maxLaptop, maxMobile, maxTablet } from "../../styles/breakpoints";

export const Container = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  padding: 135px 215px 40px 215px;

  @media ${maxLaptop} {
    padding: 105px 100px 40px 100px;
  }

  @media ${maxTablet} {
    padding: 85px 30px 40px 30px;
  }
  @media ${maxTablet} {
    padding: 85px 30px 40px 30px;
  }

  @media ${maxMobile} {
    padding: 45px 30px 40px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  color: #243466;
  text-align: center;
  margin-bottom: 96px;
  text-transform: capitalize;

  @media ${maxMobile} {
    margin-bottom: 60px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${maxMobile} {
    flex-direction: column;
  }
`;

export const HexagonWrapper1 = styled.div`
  position: absolute;
  left: 0;
  top: 18%;
  width: 200px;
  height: 255px;

  @media ${maxMobile} {
    display: none;
  }
`;

export const HexagonWrapper2 = styled.div`
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 179px;
  height: 155px;

  @media ${maxMobile} {
    display: none;
  }
`;
