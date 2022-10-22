import Image from "next/image";
import { useState } from "react";
import SoftwereImages from "../../components/softwereImages/SoftwereImages";
import SoftwereRow from "../../components/softwereRow/SoftwereRow";
import * as S from "./elements";

const optionsData = [
  {
    icon: {
      src: "/images/icons/softwere-icon2.png",
      alt: "Icon2",
      width: 26,
      height: 22,
    },
    text: "Selling online",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon3.png",
      alt: "Icon3",
      width: 22,
      height: 19,
    },
    text: "Customer",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon4.png",
      alt: "Icon4",
      width: 23,
      height: 23,
    },
    text: "Invoicing",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon5.png",
      alt: "Icon5",
      width: 30,
      height: 20,
    },
    text: "Payments",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon6.png",
      alt: "Icon6",
      width: 26,
      height: 26,
    },
    text: "Inventory",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon7.png",
      alt: "Icon7",
      width: 34,
      height: 29,
    },
    text: "Tickets",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon8.png",
      alt: "Icon8",
      width: 29,
      height: 29,
    },
    text: "Self service",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon9.png",
      alt: "Icon9",
      width: 27,
      height: 26,
    },
    text: "Data",
  },
  {
    icon: {
      src: "/images/icons/softwere-icon10.png",
      alt: "Icon10",
      width: 23,
      height: 23,
    },
    text: "Managing projects",
  },
];

const optionsImageData = [
  {
    image: {
      src: "/images/option-img1.png",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#FF3465",
    text: "Selling Online dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img2.jpg",
      alt: "Image",
      width: 480,
      height: 415,
      objectFit: "cover",
    },
    bg: "#395144",
    text: "Customer dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img1.png",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#FF3465",
    text: "Invoicing dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img4.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#395144",
    text: "Payments dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img5.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#395144",
    text: "Inventory dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img6.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#905E96",
    text: "Tickets dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img7.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#395144",
    text: "Self Service dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img8.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#905E96",
    text: "Data dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
  {
    image: {
      src: "/images/option-img9.jpg",
      alt: "Image",
      width: 480,
      height: 415,
    },
    bg: "#FF3465",
    text: "Managing Projects dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r adipiscing elit, sed do eiusmod.",
  },
];

const Softwere = () => {
  const [optionIndex, setOptionIndex] = useState(0);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          The software of the future will not be CRM, ERP, Helpdesk or
          eCommerce. It will be All in one it will be called just <br />
          <S.BoldTitle>Business software.</S.BoldTitle>
        </S.Title>

        <S.ContentWrapper>
          <S.ContentRow>
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
                <Image
                  src="/images/icons/softwere-icon2.png"
                  alt="Icon1"
                  width={26}
                  height={22}
                />
              </S.Icon>
            </S.IconWrapper>
            <S.Text>
              Text about customer journey <br /> Multichannel - website for
              information about products and services with implemented good
              marketing strategies and SEO, available in Google and other search
              engines. Website is easy to update and non-technical can manage
              it. Of course it is as a service, so you don’t need to worry about
              hosting, coding or features.
            </S.Text>
          </S.ContentRow>

          <S.OptionsWrapper>
            <S.OptionsTextWrapper>
              {optionsData.map((option, index) => (
                <S.SingleOption
                  key={index}
                  onClick={() => setOptionIndex(index)}
                  bg={optionIndex === index}
                >
                  <SoftwereRow icon={option.icon} text={option.text} />
                </S.SingleOption>
              ))}
            </S.OptionsTextWrapper>

            <S.OptionsImagesWrapper>
              <SoftwereImages
                image={optionsImageData[optionIndex].image}
                text={optionsImageData[optionIndex].text}
                bg={optionsImageData[optionIndex].bg}
              />
            </S.OptionsImagesWrapper>
          </S.OptionsWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Softwere;
