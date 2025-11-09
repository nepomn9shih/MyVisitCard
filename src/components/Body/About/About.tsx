import * as React from 'react';

import {StyledAboutBlock, StylesAboutContent, StyledImage} from "./styles";
import samurai from "../../../images/samurai.png";
import {StyledContentTitle} from '../styles';

/** Раздел "О сайте" */
export const About = () => {
  return (
    <StyledAboutBlock className="qa-about-block">
      <StyledContentTitle className="qa-about-block-title">
        О сайте
      </StyledContentTitle>
      <StylesAboutContent className="qa-about-block-content">
        <StyledImage
          className="qa-about-block-image"
          src={samurai}
        />
        <p>
          "Данный сайт является резюме-визиткой, содержащий информацию обо мне,
          моих навыках, опыте работы, моих проектах. Здесь также присутствуют
          ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою
          страницу в LinkedIn."
        </p>
        <br />
        <p>
          <b>Непомнящих Александр, Старший frontend-разработчик.</b>
        </p>
      </StylesAboutContent>
    </StyledAboutBlock>
  );
};
