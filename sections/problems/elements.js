import styled from "styled-components";
import { maxLaptop, maxMobile, maxTablet } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 92px 90px 0px 90px;
  position: relative;

  @media ${maxLaptop} {
    padding: 72px 30px 0px 30px;
  }

  @media ${maxTablet} {
    padding: 52px 20px 0px 20px;
  }
`;
export const Wrapper = styled.div`
  padding-bottom: 80px;
  border-bottom: 2px solid #d9d9d9;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #243466;
  margin-bottom: 96px;
  text-align: center;
  text-transform: capitalize;

  @media ${maxMobile} {
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 125px;
  justify-content: space-between;

  @media ${maxLaptop} {
    padding: 0px 70px;
  }

  @media ${maxTablet} {
    padding: 0px 10px;
  }

  @media ${maxMobile} {
    flex-direction: column;
  }
`;

export const HexagonBg = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  width: 105px;
  height: 180px;
`;
