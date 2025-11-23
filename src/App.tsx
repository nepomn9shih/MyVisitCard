import {HashRouter} from 'react-router-dom';
import {useState} from 'react';

import {PageTheme} from './ui-kit/components/PageTheme';
import {getTheme} from './ui-kit/utils/getValueFromLocalStorage';
import {saveTheme} from './ui-kit/utils/saveInLocalStorage';
import {Header} from './components/Header/Header';
import {StyledWrapper} from './components/StyledWrapper';
import {ThemeNames} from './enums/ThemeNames';
import {PageFooter} from './ui-kit/components/PageFooter';
import {FOOTER_TEXT} from './constants';
import {PageBody} from './ui-kit/components/PageBody';
import {getPages} from './constants/pages';
import {SIDEBAR_ITEMS_DATA} from './constants/sidebar';

export const App = () => {
  const [chosenTheme, setChosenTheme] = useState(getTheme());

  const handlerToggle = () => {
    const newTheme = chosenTheme === ThemeNames.LIGHT
        ? ThemeNames.DARK
        : ThemeNames.LIGHT;
    setChosenTheme(newTheme);

    saveTheme(newTheme);
  }

  return (
    <>
      <PageTheme chosenTheme={chosenTheme} />
      <HashRouter>
        <StyledWrapper>
            <Header handlerToggle={handlerToggle} />
            <PageBody
              pages={getPages()}
              sidebarItems={SIDEBAR_ITEMS_DATA}
            />
            <PageFooter text={FOOTER_TEXT} />
        </StyledWrapper>
      </HashRouter>
    </>
  );
}
