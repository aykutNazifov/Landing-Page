import ProblemsCard from "../../components/problemsCard/ProblemsCard";
import * as S from "./elements";

const data = [
  {
    icon: {
      src: "/images/icons/problems-card-icon1.png",
      alt: "Icon",
      width: 46,
      height: 46,
    },
    text: "More sales",
  },
  {
    icon: {
      src: "/images/icons/problems-card-icon2.png",
      alt: "Icon",
      width: 51,
      height: 50,
    },
    text: "Reduce expenses",
  },
  {
    icon: {
      src: "/images/icons/problems-card-icon3.png",
      alt: "Icon",
      width: 52,
      height: 40,
    },
    text: "Increase employee efficiency",
  },
  {
    icon: {
      src: "/images/icons/problems-card-icon4.png",
      alt: "Icon",
      width: 54,
      height: 54,
    },
    text: "Implement control",
  },
  {
    icon: {
      src: "/images/icons/problems-card-icon5.png",
      alt: "Icon",
      width: 51,
      height: 51,
    },
    text: "Offer better customer service",
  },
  {
    icon: {
      src: "/images/icons/problems-card-icon6.png",
      alt: "Icon",
      width: 59,
      height: 59,
    },
    text: "Meet right decisions",
  },
];

const Problems = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>What problems can we solve for you?</S.Title>
        <S.CardsWrapper>
          {data.map((item, index) => (
            <ProblemsCard key={index} icon={item.icon} text={item.text} />
          ))}
        </S.CardsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Problems;
