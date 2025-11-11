import * as React from 'react';

import {Text} from '../../../ui-kit/components/Text';
import {Section} from '../../../ui-kit/components/Section';
import {StyledAboutContent, StyledImage} from "./styles";
import samurai from "../../../images/samurai.png";

/** Раздел "О сайте" */
export const About = () => {
  return (
    <Section
      className="qa-about-block"
      text='О сайте'
    >
      <StyledAboutContent className="qa-about-block-content">
        <div>
          <Text variation='descriptionL' text={
            `Данный сайт является резюме-визиткой, содержащий информацию обо мне,
            моих навыках, опыте работы, моих проектах. Здесь также присутствуют
            ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою
            страницу в LinkedIn.<br/><br/>
            <b>Непомнящих Александр, Старший frontend-разработчик.</b>`
          } />
        </div>
        <StyledImage
          className="qa-about-block-image"
          src={samurai}
        />
      </StyledAboutContent>
    </Section>
  );
};
