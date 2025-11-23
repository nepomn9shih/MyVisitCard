import {useState} from "react";

import {ToggleButton} from "../ToggleButton";
import {Text} from "../Text";

import {
  StyledHeaderBlock,
  StyledHeaderBurger,
  StyledHeaderList,
  StyledHeaderLogo,
  StyledHeaderMenu
} from "./styles";
import {PageHeaderProps} from "./types";
import {PageHeaderLink} from "./PageHeaderLink";
import { Box } from "../Box";

/** Шапка */
export const PageHeader = ({
  handlerToggle,
  logo,
  logoUrl,
  title,
  textColor = 'var(--header-text-color)',
  textHoverColor = 'var(--header-text-hover-color)',
  textActiveColor = 'var(--header-text-active-color)',
  activeBgColor = 'var(--secondary-bg-color)',
  bgColor = 'var(--header-bg-color)',
  logoTextVariation = 'titleL',
  textVariation = 'descriptionXL',
  links
}: PageHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeaderBlock
      className="qa-header"
      $bgColor={bgColor}
    >
      <StyledHeaderLogo
        className="qa-header-logo"
        href={logoUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="" />
      </StyledHeaderLogo>
      <Text
        variation={logoTextVariation}
        color={textColor}
        text={title}
      />
      <StyledHeaderMenu className="qa-header-menu">
        <StyledHeaderList
          open={isMenuOpen ? true : false}
          $bgColor={bgColor}
        >
          {links.map((props, index) => {
            return (
              <PageHeaderLink
                key={index}
                textColor={textColor}
                textHoverColor={textHoverColor}
                textActiveColor={textActiveColor}
                activeBgColor={activeBgColor}
                textVariation={textVariation}
                {...props}
              />
            )
          })}
          <Box pt='10px' pb='10px'>
            <ToggleButton
              buttonText="DarkMode"
              handlerOnChange={handlerToggle}
            />
          </Box>
        </StyledHeaderList>
        <StyledHeaderBurger
          className="qa-header-burger"
          onClick={handleClick}
          $active={isMenuOpen}
          $textColor={textColor}
        >
          <span></span>
        </StyledHeaderBurger>
      </StyledHeaderMenu>
    </StyledHeaderBlock>
  );
};
