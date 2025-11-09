import {useState} from "react";
import {NavLink} from "react-router-dom";

import ya from "../../images/ya.png";
import {ToggleButton} from "../ToggleButton/ToggleButton";
import {
  StyledHeaderBlock,
  StyledHeaderBurger,
  StyledHeaderLink,
  StyledHeaderList,
  StyledHeaderLogo,
  StyledHeaderMenu,
  StyledHeaderName
} from "./styles";
import {HeaderProps} from "./types";

/** Шапка */
export const Header = ({handlerToggle}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeaderBlock className="qa-header">
      <StyledHeaderLogo
        className="qa-header-logo"
        href="https://github.com/nepomn9shih"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ya} alt="" />
      </StyledHeaderLogo>
      <StyledHeaderName className="qa-header-name">
        МОЯ\\\
        <br/>
        ВИЗИТКА
      </StyledHeaderName>
      <StyledHeaderMenu className="qa-header-menu">
        <StyledHeaderList isOpen={isMenuOpen ? true : false}>
          <li>
            <StyledHeaderLink
              href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763"
              target="_blank"
              rel="noreferrer"
            >
              HH
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink
              href="https://github.com/nepomn9shih"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink
              href="https://www.linkedin.com/in/alexander-nepomnyashchikh/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink as={NavLink} to="/about">
                О сайте
            </StyledHeaderLink>
          </li>
          <li>
            <ToggleButton
              buttonText="DarkMode"
              handlerOnChange={handlerToggle}
            />
          </li>
        </StyledHeaderList>
        <StyledHeaderBurger
          className="qa-header-burger"
          onClick={handleClick}
          active={isMenuOpen ? true : false}
        >
          <span></span>
        </StyledHeaderBurger>
      </StyledHeaderMenu>
    </StyledHeaderBlock>
  );
};
