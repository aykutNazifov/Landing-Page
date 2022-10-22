import styled from "styled-components";
import { maxMobile } from "../../styles/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 30%;
  background: linear-gradient(
    253.22deg,
    #b4f759 -111.13%,
    #90ed6f -98.46%,
    #35d5a5 -64.67%,
    #00c7c5 -47.77%,
    #2d9be0 -7.65%,
    #5277f7 28.26%,
    #5b76f7 38.82%,
    #7374f6 57.82%,
    #9a70f4 81.05%,
    #bb6df3 97.95%
  );
  margin-bottom: 36px;
  padding: 44px 0px 27px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.05);
  }

  @media ${maxMobile} {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 59px;
  height: 59px;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 27px;
`;

export const PlusIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 19px;
`;
