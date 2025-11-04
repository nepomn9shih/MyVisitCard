import * as React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';

import {AboutBlock, AboutText} from "./styles";
import {ContentTitle} from "../Skills/styles";

SwiperCore.use([Navigation, Pagination]);

export const About = ({isDarkMode}: {isDarkMode: boolean}) => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`slide-${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <AboutBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>О сайте</ContentTitle>
      <Swiper
        id="about"
        tag="section"
        wrapperTag="ul"
        speed={800}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
      <AboutText dark={isDarkMode}>
        <p>
          "Данный сайт является резюме-визиткой, содержащий информацию обо мне,
          моих навыках, опыте работы, моих проектах. Здесь также присутствуют
          ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою
          страницу в LinkedIn."
        </p>
        <br />
        <p>
          <b>Непомнящих Александр, React frontend разработчик.</b>
        </p>
      </AboutText>
    </AboutBlock>
  );
};
