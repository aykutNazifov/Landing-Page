import Image from "next/image";
import * as S from "./elements";

const ContactCard = ({ text, icon }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoWrapper>
          <Image {...icon} />
        </S.LogoWrapper>
        <S.Text>{text}</S.Text>
      </S.Wrapper>
      <S.BottomBorder />
    </S.Container>
  );
};

export default ContactCard;
