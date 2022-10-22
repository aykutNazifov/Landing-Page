import SingleQuestion from "../../components/singleQuestion/SingleQuestion";
import * as S from "./elements";

const data = [
  {
    question: "Do you want to know how much approximately will Composity cost?",
    answer: "Lorem ipsum dolar amet ich san ol",
  },
  {
    question: "Already convinced? Get your discount.",
    answer: "Request a call and you will get 10% discount during the 7 days",
  },
];

const Questions = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>What software are you currently using?</S.Title>
        <S.QuestionsWrapper>
          {data.map((item, index) => (
            <SingleQuestion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </S.QuestionsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Questions;
