import ya from "../../images/ya.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";
import { HeaderBlock, HeaderBurger, HeaderLink, HeaderList, HeaderLogo, HeaderMenu, HeaderName } from "./HeaderStyles";

const Header = ({handlerToggle, isDarkMode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderBlock dark={isDarkMode}>
      <HeaderLogo dark={isDarkMode} href="https://github.com/nepomn9shih">
        <img src={ya} alt="" />
      </HeaderLogo>
      <HeaderName dark={isDarkMode}>МОЯ\\\<br/>ВИЗИТКА</HeaderName>
      <HeaderMenu>
        <HeaderList dark={isDarkMode} isOpen={isMenuOpen ? true : false}>
          <li>
            <HeaderLink dark={isDarkMode} href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763" target="_blank" rel="noreferrer">
              HH
            </HeaderLink>
          </li>
          <li>
            <HeaderLink dark={isDarkMode} href="https://github.com/nepomn9shih" target="_blank" rel="noreferrer">
              GitHub
            </HeaderLink>
          </li>
          <li>
            <HeaderLink dark={isDarkMode} href="https://www.linkedin.com/in/alexander-nepomnyashchikh/" target="_blank" rel="noreferrer">
              LinkedIn
            </HeaderLink>
          </li>
          <li>
          <HeaderLink dark={isDarkMode} as={NavLink} to="/about">
              О сайте
            </HeaderLink>
          </li>
          <li>
          <ToggleButton isDarkMode={isDarkMode} buttonText={"DarkMode"} handlerOnChange={handlerToggle}/>
          </li>
        </HeaderList>
        <HeaderBurger
          dark={isDarkMode}
          onClick={handleClick}
          active={isMenuOpen ? true : false}
        >
          <span></span>
        </HeaderBurger>
      </HeaderMenu>
    </HeaderBlock>
  );
};

export default Header;
