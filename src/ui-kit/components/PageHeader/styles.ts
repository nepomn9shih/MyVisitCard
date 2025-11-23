import styled from "styled-components";

export const StyledHeaderBlock = styled.div<{
  $bgColor: React.CSSProperties['backgroundColor'];
}>`
  box-sizing: border-box;
  padding: 15px;
  background-color: ${({$bgColor}) => $bgColor};
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 100px) minmax(auto, 150px) minmax(
      auto,
      1100px
    ) 1fr;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

export const StyledHeaderList = styled.div<{
  open: boolean;
  $bgColor: React.CSSProperties['backgroundColor']
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 992px) {
      display: ${({open}) => open ? "flex" : "none"};
      flex-direction: column;
      position: absolute;
      top: 90px;
      background-color: ${({$bgColor}) => $bgColor};
      padding: 19px;
      border-radius: 10px;
      box-shadow: var(--box-shadow);
    }
`;

export const StyledHeaderLogo = styled.a`
  grid-column: 2 / 3;

  img {
    width: 70px;
    height: 70px;
    opacity: var(--opacity-value);
    border-radius: 50%;
	  box-shadow: var(--box-shadow);

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export const StyledHeaderMenu = styled.nav`
  grid-column: 4 / 5;

  @media (max-width: 992px) {
    display: grid;
    justify-items: end;
    position: relative;
  }
`;

export const StyledHeaderLink = styled.a<{
  $textColor: React.CSSProperties['color'];
  $textHoverColor: React.CSSProperties['color'];
  $textActiveColor: React.CSSProperties['color'];
  $activeBgColor: React.CSSProperties['backgroundColor'];
}>`
  color: ${({$textColor}) => $textColor};
  padding: 3px 5px 5px;
  margin: 5px 0px;
  border-radius: 10px;

  &:hover {
    color: ${({$textHoverColor}) => $textHoverColor};
  }

  &.active {
    color: ${({$textActiveColor}) => $textActiveColor};
    background-color: ${({$activeBgColor}) => $activeBgColor}; 
    box-shadow: var(--box-shadow);
  }
`;

export const StyledHeaderBurger = styled.div<{
  $active: boolean;
  $textColor: React.CSSProperties['color'];
}>`
  display: none;

  @media (max-width: 992px) {
      width: 30px;
      height: 20px;
      color: ${({$textColor}) => $textColor};
      display: grid;
      align-items: center;
      grid-template: repeat(3, 8px) / 1fr;
      position: relative;

      &:before,
      &:after {
        content: "";
        background-color: ${({$textColor}) => $textColor};
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        transition: 0.5s;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }

      span {
        background-color: ${({$textColor}) => $textColor};
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        display: ${({$active}) => $active ? "none" : ""};
      }

      &:before {
        transform: ${({$active}) => $active ? "rotate(45deg)" : ""};
        top: ${({$active}) => $active ? "8px" : ""};
      }

      &:after {
        transform: ${({$active}) => $active ? "rotate(-45deg)" : ""};
        bottom: ${({$active}) => $active ? "9px" : ""};
      }
    }
`;
