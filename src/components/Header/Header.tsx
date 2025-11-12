import {useState} from "react";
import {NavLink} from "react-router-dom";

import {ToggleButton} from "../../ui-kit/components/ToggleButton";
import {Text} from "../../ui-kit/components/Text";
import ya from "../../images/ya.png";
import {
  StyledHeaderBlock,
  StyledHeaderBurger,
  StyledHeaderLink,
  StyledHeaderList,
  StyledHeaderLogo,
  StyledHeaderMenu
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
      <Text
        variation='titleL'
        color = 'var(--primary-text-color)'
        text='МОЯ\\\\\<br/>ВИЗИТКА'
      />
      <StyledHeaderMenu className="qa-header-menu">
        <StyledHeaderList open={isMenuOpen ? true : false}>
          <li>
            <StyledHeaderLink
              href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763"
              target="_blank"
              rel="noreferrer"
            >
              <Text
                variation='descriptionXL'
                text='HH'
              />
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink
              href="https://github.com/nepomn9shih"
              target="_blank"
              rel="noreferrer"
            >
              <Text
                variation='descriptionXL'
                text='GitHub'
              />
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink
              href="https://www.linkedin.com/in/alexander-nepomnyashchikh/"
              target="_blank"
              rel="noreferrer"
            >
              <Text
                variation='descriptionXL'
                text='LinkedIn'
              />
            </StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink as={NavLink} to="/about">
              <Text
                variation='descriptionXL'
                text='О сайте'
              />
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
          $active={isMenuOpen}
        >
          <span></span>
        </StyledHeaderBurger>
      </StyledHeaderMenu>
    </StyledHeaderBlock>
  );
};
