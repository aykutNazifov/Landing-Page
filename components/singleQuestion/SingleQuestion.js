import { useState } from "react";
import * as S from "./elements";
import { MdArrowForwardIos } from "react-icons/md";

const SingleQuestion = ({ question, answer }) => {
  const [option, setOption] = useState(null);

  return (
    <S.Container>
      <S.QuestionContainer option={option}>
        <S.QestionWrapper>
          <S.ArrowWrapper option={option}>
            <MdArrowForwardIos size={12} />
          </S.ArrowWrapper>
          <S.Text>{question}</S.Text>
        </S.QestionWrapper>
        <S.OptionsWrapper>
          <S.Option onClick={() => setOption("yes")} option={option}>
            Yes
          </S.Option>
          <S.Option onClick={() => setOption("no")} option={option}>
            No, Thanks
          </S.Option>
        </S.OptionsWrapper>
      </S.QuestionContainer>
      {option === "yes" && (
        <S.AnswerContainer
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <S.Text>{answer}</S.Text>
        </S.AnswerContainer>
      )}
    </S.Container>
  );
};

export default SingleQuestion;
