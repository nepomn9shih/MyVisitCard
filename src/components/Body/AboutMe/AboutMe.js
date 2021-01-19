import myPhoto0 from "../../../images/myPhoto0.jpg";
import myPhoto1 from "../../../images/myPhoto1.jpg";
import myPhoto2 from "../../../images/myPhoto2.jpg";
import { Swiper, SwiperSlide } from "../../../../node_modules/swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
} from "../../../../node_modules/swiper";
import { AboutMeBlock, AboutMeTitle, Hr, AboutMeText, AboutMeImage } from "./AboutMeStyles";

SwiperCore.use([Navigation, Pagination]);

const myPhotos = [myPhoto0, myPhoto1, myPhoto2]

const AboutMe = ({isDarkMode}) => {

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
        <p>Давно увлекаюсь программированием, и в 2020 серьезно решил поменять
        профессию на frontend-разработчик. Выбрал направление frontend потому,
        что мне очень нравится дизайн, пару последних лет я занимался созданием
        пользовательских интерфейсов и до сих пор увлечен этим.</p> 
        <br/>
        <Hr dark={isDarkMode}/>
        <p>Люблю и умею
        учиться, нравится быть в тренде, поэтому предпочитаю современные
        технологии. В процессе обучения научился использовать: HTML5, CSS3,
        FlexBox, Bootstrap4.5, SASS/SCSS, Grid, JavaScript, Git, ReactJS(с применением
        hooks), Material UI, Redux, Redux-form, Redux-thunk, React-router,
        gh-pages, Axios и работу с серверным API, TypeScript, БЭМ, Styled-components </p> 
        <br/>
        <Hr dark={isDarkMode}/>
        <p>Обладаю логическим мышлением,
        техническим складом ума, получаю огромное удовольствие при решении
        сложных задач. Люблю работать в команде, при этом самостоятельный,
        всегда довожу начатое дело до конца.</p> 
        <br/>
        <Hr dark={isDarkMode}/>
        <p>Умею рисовать, моделировать в 3D в Blender,
        хорошо владею графическими редакторами, имею дизайнерские способности и
        индивидуальное чувство стиля. Нравится минимализм и Material Design.
        Создал свой первый сайт еще в 2005 году.
        В 2016 году пробовал создавать игры в Unity 3D и программировать на C#.
        С 2018 года занимался созданием дизайна курсов для дистанционного обучения и версткой в программе iSpring Suite и Articulate</p>
      </AboutMeText>
    </AboutMeBlock>
  );
};

export default AboutMe;