import Image from "next/image";
import ContactCard from "../../components/contactCard/ContactCard";
import * as S from "./elements";

const Contact = () => {
  return (
    <S.Container>
      <S.HexagonWrapper1>
        <Image
          src="/images/bgElements/hexagon1.png"
          alt="Hexagon"
          layout="fill"
        />
      </S.HexagonWrapper1>
      <S.HexagonWrapper2>
        <Image
          src="/images/bgElements/hexagon2.png"
          alt="Hexagon"
          layout="fill"
        />
      </S.HexagonWrapper2>

      <S.Wrapper>
        <S.Title>Why do we contact you?</S.Title>
        <S.CardsWrapper>
          <ContactCard
            text="We think you might be in danger."
            icon={{
              src: "/images/icons/contact-card-icon1.png",
              alt: "Icon",
              width: 54,
              height: 45,
            }}
          />
          <ContactCard
            text="We carefully reviewed the public information about the company and we think you can perform much better. "
            icon={{
              src: "/images/icons/contact-card-icon2.png",
              alt: "Icon",
              width: 59,
              height: 57,
            }}
          />
          <ContactCard
            text="We have expertise and clients in every industry, so we feel like together we can build an empire"
            icon={{
              src: "/images/icons/contact-card-icon3.png",
              alt: "Icon",
              width: 41,
              height: 41,
            }}
          />
        </S.CardsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Contact;
