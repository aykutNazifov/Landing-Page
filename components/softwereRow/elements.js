import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 5px 0;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 10%;
`;
export const IconHexagonWrapper = styled.div`
  position: absolute;
  top: -10%;
  left: -40%;
`;
export const Icon = styled.div`
  z-index: 3;
`;

export const Text = styled.p`
  width: 85%;
  font-size: 18px;
  line-height: 27px;
  color: #000;
`;
