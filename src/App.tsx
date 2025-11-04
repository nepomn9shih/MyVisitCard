import './style.css';
import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import {HashRouter} from 'react-router-dom';
import {useState} from 'react';
import {StyledWrapper} from './components/StyledWrapper';

export const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlerToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
    <HashRouter>
      <StyledWrapper dark={isDarkMode}>
          <Header handlerToggle={handlerToggle} isDarkMode={isDarkMode}/>
          <Body isDarkMode={isDarkMode}/>
          <Footer isDarkMode={isDarkMode}/>
      </StyledWrapper>
    </HashRouter>
    </>
  );
}
