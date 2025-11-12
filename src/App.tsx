import {HashRouter} from 'react-router-dom';
import {useState} from 'react';

import {PageTheme} from './ui-kit/components/PageTheme';
import {getTheme} from './ui-kit/utils/getValueFromLocalStorage';
import {saveTheme} from './ui-kit/utils/saveInLocalStorage';
import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import {StyledWrapper} from './components/StyledWrapper';
import {ThemeNames} from './enums/ThemeNames';

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
            <Body />
            <Footer />
        </StyledWrapper>
      </HashRouter>
    </>
  );
}
