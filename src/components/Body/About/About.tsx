import * as React from 'react';

import {AboutBlock, AboutText, StyledImage} from "./styles";
import samurai from "../../../images/samurai.png";
import {ContentTitle} from '../styles';

export const About = () => {
  return (
    <AboutBlock>
      <ContentTitle>
        О сайте
      </ContentTitle>
      <AboutText>
        <StyledImage src={samurai} />
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
      </AboutText>
    </AboutBlock>
  );
};
