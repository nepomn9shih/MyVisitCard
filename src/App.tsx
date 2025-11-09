import {HashRouter} from 'react-router-dom';
import {useState} from 'react';

import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import {StyledWrapper} from './components/StyledWrapper';
import {PageTheme} from './ui-kit/components/PageTheme';
import {ThemeNames} from './enums/ThemeNames';

export const App = () => {
  const [chosenTheme, setChosenTheme] = useState(ThemeNames.LIGHT);

  const handlerToggle = () => {
    setChosenTheme(
      chosenTheme === ThemeNames.LIGHT
        ? ThemeNames.DARK
        : ThemeNames.LIGHT
    );
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
