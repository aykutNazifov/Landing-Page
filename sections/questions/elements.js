import styled from "styled-components";
import { maxLaptop, maxTablet, maxMobile } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 92px 90px 20px 90px;

  @media ${maxLaptop} {
    padding: 92px 30px 20px 30px;
  }

  @media ${maxTablet} {
    padding: 92px 20px 20px 20px;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 300;
  color: #000;
  margin-bottom: 50px;

  @media ${maxMobile} {
    text-align: center;
  }
`;

export const QuestionsWrapper = styled.div``;
