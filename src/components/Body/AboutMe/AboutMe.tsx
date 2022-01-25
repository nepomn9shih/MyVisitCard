import * as React from 'react';
import SwiperCore, { Navigation, Pagination } from '../../../../node_modules/swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import myPhoto0 from "../../../images/myPhoto0.jpg";
import myPhoto1 from "../../../images/myPhoto1.jpg";
import myPhoto2 from "../../../images/myPhoto2.jpg";

import { AboutMeBlock, AboutMeTitle, AboutMeText, AboutMeImage } from "./styles";
import { ABOUT_ME_TEXT_DATA } from "./aboutMeBase/aboutMeText";
import { AboutMeTextBlock } from "./AboutMeTextBlock";

SwiperCore.use([Navigation, Pagination]);

const myPhotos = [myPhoto0, myPhoto1, myPhoto2]

const AboutMe = ({isDarkMode}: {isDarkMode: boolean}) => {

  const mySlides = [];
  for (let i = 0; i < 3; i++) {
    mySlides.push(
      <SwiperSlide key={`slide-${i}`}>
          <img
            src={myPhotos[i]}
            alt={`myPhoto-${i}`}
          />
      </SwiperSlide>
    );
  }

  return (
    <AboutMeBlock dark={isDarkMode}>
      <AboutMeTitle dark={isDarkMode}>Обо мне</AboutMeTitle>
      <AboutMeImage dark={isDarkMode}>
      <Swiper
        id="aboutMe"
        navigation
        pagination={{ clickable: true }}
        speed={800}
      >
        {mySlides}
      </Swiper>
      </AboutMeImage>
      <AboutMeText dark={isDarkMode}>
        {ABOUT_ME_TEXT_DATA.map((text, index) => {
          return (
            <AboutMeTextBlock
              key={index}
              text={text}
              isDarkMode={isDarkMode}
            />
          )
        })}
      </AboutMeText>
    </AboutMeBlock>
  );
};

export default AboutMe;