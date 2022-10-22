import { motion } from "framer-motion";
import styled from "styled-components";
import { maxMobile } from "../../styles/breakpoints";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const QuestionContainer = styled.div`
  padding: 27px 34px;
  background: ${(props) => (props.option === "yes" ? "#836DF3" : "#F3F3F3")};
  color: ${(props) => (props.option === "yes" ? "#fff" : "#000")};
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${maxMobile} {
    flex-direction: column;
    gap: 30px;
    padding: 10px 15px;
  }
`;

export const QestionWrapper = styled.div`
  width: 70%;
  display: flex;
  gap: 27px;

  @media ${maxMobile} {
    width: 100%;
  }
`;

export const ArrowWrapper = styled.div`
  transform: ${(props) => props.option === "yes" && "rotate(90deg)"};
  transition: 0.8s all ease;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 300;

  text-transform: capitalize;
`;

export const OptionsWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  gap: 77px;

  @media ${maxMobile} {
    width: 100%;
    justify-content: center;
  }
`;

export const Option = styled.p`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;

  &:first-child {
    text-decoration: ${(props) => props.option === "yes" && "underline"};
  }

  &:last-child {
    text-decoration: ${(props) => props.option === "no" && "underline"};
  }
`;

export const AnswerContainer = styled(motion.div)`
  padding: 27px 34px;
  background: #f3f3f3;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
`;
