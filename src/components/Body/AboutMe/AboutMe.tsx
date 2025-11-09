import * as React from 'react';
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import myPhoto0 from "./assets/myPhoto0.jpg";
import myPhoto1 from "./assets/myPhoto1.jpg";
import myPhoto2 from "./assets/myPhoto2.jpg";

import {
  StyledAboutMeBlock,
  StyledAboutMeTitle,
  StyledAboutMeText,
  StyledAboutMeImage,
  StyledSwiperImage
} from "./styles";
import {ABOUT_ME_TEXT_DATA} from "./aboutMeBase/aboutMeText";
import {AboutMeTextBlock} from "./AboutMeTextBlock";

SwiperCore.use([Navigation, Pagination]);

const myPhotos: string[] = [myPhoto0, myPhoto1, myPhoto2];

const mySlides = myPhotos.map((photo, index) => {
    return (
      <SwiperSlide key={`slide-${index}`} className={`qa-slide-${index}`}>
          <StyledSwiperImage
            src={photo}
            alt={`myPhoto-${index}`}
          />
      </SwiperSlide>
    )
  }
);

/** Раздел "Обо мне" */
export const AboutMe = () => {
  return (
    <StyledAboutMeBlock className="qa-about-me-block">
      <StyledAboutMeTitle className="qa-about-me-block-title">
        Непомнящих Александр
      </StyledAboutMeTitle>
      <StyledAboutMeImage className="qa-about-me-block-image">
        <Swiper
          id="aboutMe"
          navigation
          pagination={{
            clickable: true,
          }}
          speed={800}
        >
          {mySlides}
        </Swiper>
      </StyledAboutMeImage>
      <StyledAboutMeText className="qa-about-me-block-text">
        {ABOUT_ME_TEXT_DATA.map((text, index) => {
          return (
            <AboutMeTextBlock
              key={index}
              className="qa-about-me-block-text-item"
              text={text}
              isLast={index === ABOUT_ME_TEXT_DATA.length - 1}
            />
          )
        })}
      </StyledAboutMeText>
    </StyledAboutMeBlock>
  );
};
