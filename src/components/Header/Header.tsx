import {useState} from "react";
import {NavLink} from "react-router-dom";

import ya from "../../images/ya.png";
import {ToggleButton} from "../ToggleButton/ToggleButton";
import {
  HeaderBlock,
  HeaderBurger,
  HeaderLink,
  HeaderList,
  HeaderLogo,
  HeaderMenu,
  HeaderName
} from "./styles";
import {HeaderProps} from "./types";

export const Header = ({handlerToggle}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderBlock>
      <HeaderLogo
        href="https://github.com/nepomn9shih"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ya} alt="" />
      </HeaderLogo>
      <HeaderName>МОЯ\\\<br/>ВИЗИТКА</HeaderName>
      <HeaderMenu>
        <HeaderList isOpen={isMenuOpen ? true : false}>
          <li>
            <HeaderLink
              href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763"
              target="_blank"
              rel="noreferrer"
            >
              HH
            </HeaderLink>
          </li>
          <li>
            <HeaderLink
              href="https://github.com/nepomn9shih"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </HeaderLink>
          </li>
          <li>
            <HeaderLink
              href="https://www.linkedin.com/in/alexander-nepomnyashchikh/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </HeaderLink>
          </li>
          <li>
            <HeaderLink as={NavLink} to="/about">
                О сайте
            </HeaderLink>
          </li>
          <li>
            <ToggleButton
              buttonText="DarkMode"
              handlerOnChange={handlerToggle}
            />
          </li>
        </HeaderList>
        <HeaderBurger
          onClick={handleClick}
          active={isMenuOpen ? true : false}
        >
          <span></span>
        </HeaderBurger>
      </HeaderMenu>
    </HeaderBlock>
  );
};
