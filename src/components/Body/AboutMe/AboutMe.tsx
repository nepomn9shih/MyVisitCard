import * as React from 'react';
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import myPhoto0 from "../../../images/myPhoto0.jpg";
import myPhoto1 from "../../../images/myPhoto1.jpg";
import myPhoto2 from "../../../images/myPhoto2.jpg";

import {AboutMeBlock, AboutMeTitle, AboutMeText, AboutMeImage, StyledSwiperImage} from "./styles";
import {ABOUT_ME_TEXT_DATA} from "./aboutMeBase/aboutMeText";
import {AboutMeTextBlock} from "./AboutMeTextBlock";

SwiperCore.use([Navigation, Pagination]);

const myPhotos: string[] = [myPhoto0, myPhoto1, myPhoto2]

export const AboutMe = () => {

  const mySlides = [];
  for (let i = 0; i < 3; i++) {
    mySlides.push(
      <SwiperSlide key={`slide-${i}`}>
          <StyledSwiperImage
            src={myPhotos[i]}
            alt={`myPhoto-${i}`}
          />
      </SwiperSlide>
    );
  }

  return (
    <AboutMeBlock>
      <AboutMeTitle>
        Непомнящих Александр
      </AboutMeTitle>
      <AboutMeImage>
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
      </AboutMeImage>
      <AboutMeText>
        {ABOUT_ME_TEXT_DATA.map((text, index) => {
          return (
            <AboutMeTextBlock
              key={index}
              text={text}
              isLast={index === ABOUT_ME_TEXT_DATA.length - 1}
            />
          )
        })}
      </AboutMeText>
    </AboutMeBlock>
  );
};
