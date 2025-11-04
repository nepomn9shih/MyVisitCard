import * as React from 'react';

import {AboutBlock, AboutText, StyledImage} from "./styles";
import {ContentTitle} from "../Skills/styles";
import samurai from "../../../images/samurai.png";

export const About = ({isDarkMode}: {isDarkMode: boolean}) => {
  return (
    <AboutBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>О сайте</ContentTitle>
      <AboutText dark={isDarkMode}>
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
