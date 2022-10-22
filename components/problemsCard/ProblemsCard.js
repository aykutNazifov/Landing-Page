import Image from "next/image";
import * as S from "./elements";

const ProblemsCard = ({ icon, text }) => {
  return (
    <S.Container>
      <S.PlusIconWrapper>
        <Image
          src="/images/icons/problems-plus-icon.png"
          alt="Plus Icon"
          width={18}
          height={24}
        />
      </S.PlusIconWrapper>
      <S.IconWrapper>
        <Image {...icon} />
      </S.IconWrapper>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default ProblemsCard;
