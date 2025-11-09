import * as React from 'react';

import {ContentTitleBlock} from '../../../ui-kit/components/ContentTitleBlock';
import {StyledAboutBlock, StyledAboutContent, StyledImage} from "./styles";
import samurai from "../../../images/samurai.png";
import { Text } from '../../../ui-kit/components/Text';

/** Раздел "О сайте" */
export const About = () => {
  return (
    <StyledAboutBlock className="qa-about-block">
      <ContentTitleBlock text='О сайте' />
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
    </StyledAboutBlock>
  );
};
