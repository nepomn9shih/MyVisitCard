import { Swiper, SwiperSlide } from "../../../node_modules/swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
} from "../../../node_modules/swiper";

SwiperCore.use([Navigation, Pagination]);

const About = () => {
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
    <section class="content__about about">
      <h1 class="content__title">О сайте</h1>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
      <div class="about__text">
        <p>
          "Данный сайт является резюме-визиткой, содержащий информацию обо мне,
          моих навыках, опыте работы, моих проектах. Здесь также присутствуют
          ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою
          страницу в LinkedIn."
        </p>
        <br />
        <p>
          <b>Непомнящих Александр, начинающий React frontend разработчик.</b>
        </p>
      </div>
    </section>
  );
};

export default About;
