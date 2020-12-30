import myPhoto from "../../images/myPhoto.jpg";

const AboutMe = () => {
  return (
    <section class="content__aboutMe aboutMe">
      <h1 class="content__title aboutMe__title">Обо мне</h1>
      <div class="aboutMe__image">
        <img src={myPhoto} alt="" />
      </div>
      <div class="aboutMe__text">
        <p>Давно увлекаюсь программированием, и в 2020 серьезно решил поменять
        профессию на frontend-разработчик. Выбрал направление frontend потому,
        что уже более последних 2 лет занимался созданием
        пользовательских интерфейсов и до сих пор увлечен этим.</p> 
        <br/>
        <p>Люблю и умею
        учиться, нравится быть в тренде, поэтому предпочитаю современные
        технологии. В процессе обучения научился использовать: HTML5, CSS3,
        FlexBox, Bootstrap4.5, SASS/SCSS, Grid, JavaScript, Git, ReactJS(с применением
        hooks), Material UI, Redux, Redux-form, Redux-thunk, React-router,
        gh-pages, Axios, работать с серверным API, TypeScript. </p> 
        <br/>
        <p>Обладаю логическим мышлением,
        техническим складом ума, получаю огромное удовольствие при решении
        сложных задач. Люблю работать в команде, при этом самостоятельный,
        всегда довожу начатое дело до конца.</p> 
        <br/>
        <p>Умею рисовать, моделировать в 3D в Blender,
        хорошо владею графическими редакторами, имею дизайнерские способности и
        индивидуальное чувство стиля. Нравится минимализм и Material Design.
        Создал свой первый сайт еще в 2005 году.
        В 2016 году пробовал создавать игры в Unity 3D и программировать на C#.
        С 2018 года занимался созданием дизайна курсов для дистанционного обучения и версткой в программе iSpring и Articulate</p>
      </div>
    </section>
  );
};

export default AboutMe;
