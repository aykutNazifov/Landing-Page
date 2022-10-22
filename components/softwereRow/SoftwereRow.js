import Image from "next/image";
import * as S from "./elements";

const SoftwereRow = ({ icon, text }) => {
  return (
    <S.Container>
      <S.IconWrapper>
        <S.IconHexagonWrapper>
          <Image
            src="/images/icons/hexagon-icons.png"
            alt="Hexagon"
            width={33}
            height={28}
          />
        </S.IconHexagonWrapper>
        <S.Icon>
          <Image {...icon} />
        </S.Icon>
      </S.IconWrapper>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default SoftwereRow;
