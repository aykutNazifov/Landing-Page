import Image from "next/image";
import Link from "next/link";
import * as S from "./elements";

const Intro = () => {
  return (
    <S.Container>
      <S.RightCloudWrapper>
        <Image src="/images/cloud1.png" alt="cloud" width={74} height={48} />
      </S.RightCloudWrapper>
      <S.LogosWrapper>
        <Link href="/">
          <S.LogoWrapper1>
            <Image
              src="/images/logo1.png"
              alt="Logo1"
              layout="fill"
              objectFit="contain"
            />
          </S.LogoWrapper1>
        </Link>
        <S.PlusIcon>
          <Image
            src="/images/icons/plus-icon.png"
            alt="Plus Icon"
            layout="fill"
            objectFit="cover"
          />
        </S.PlusIcon>
        <Link href="/">
          <S.LogoWrapper2>
            <Image
              src="/images/logo2.png"
              alt="Logo2"
              width={314}
              height={63}
            />
          </S.LogoWrapper2>
        </Link>
      </S.LogosWrapper>
      <S.Wrapper>
        <S.Title>
          Do you know what we can <br />
          <S.ColoredTitle>achieve together?</S.ColoredTitle>
        </S.Title>
        <S.ImageWrapper>
          <Image
            src="/images/rocket.png"
            alt="Rocket"
            layout="fill"
            objectFit="contain"
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Intro;
