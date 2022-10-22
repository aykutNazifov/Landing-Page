import Image from "next/image";
import * as S from "./elements";

const SoftwereImages = ({ image, text, bg }) => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>
      <S.HexagonTextWrapper bg={bg}>{text}</S.HexagonTextWrapper>
      <S.SmallHexagon />
    </S.Container>
  );
};

export default SoftwereImages;
