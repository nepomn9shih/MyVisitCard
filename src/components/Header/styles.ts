import styled from "styled-components";

export const StyledHeaderBlock = styled.div`
  grid-area: header;
  padding: 15px;
  background-color: var(--main-color);
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 100px) minmax(auto, 150px) minmax(
      auto,
      1100px
    ) 1fr;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const StyledHeaderList = styled.ul<{isOpen: boolean}>`
  display: grid;
  grid-auto-flow: column;
  justify-items: end;

  li {
    align-self: center;
  }

  @media (max-width: 992px) {
      display: ${({isOpen}) => isOpen ? "block" : "none"};
      position: absolute;
      top: 90px;
      background-color: var(--main-color);
      padding: 19px;
      border-radius: 10px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

      li {
        padding: 15px;
      }
    }
`;

export const StyledHeaderLogo = styled.a`
  grid-column: 2 / 3;

  img {
    width: 70px;
    height: 70px;
    opacity: var(--opacity-value);
    border-radius: 50%;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export const StyledHeaderName = styled.b`
  font-size: 30px;
  color: var(--main-text-color);
`;

export const StyledHeaderMenu = styled.nav`
  grid-column: 4 / 5;
  @media (max-width: 992px) {
    & {
      display: grid;
      justify-items: end;
      position: relative;
    }
  }
`;

export const StyledHeaderLink = styled.a`
  color: var(--main-text-color);
  font-size: 18px;
  padding: 3px 5px 5px 5px;
  margin: 5px 0px;
  border-radius: 10px;

  &:hover {
    color: var(--active-color);
  }

  &.active {
    color: var(--description-text-color);
    background-color: var(--secondary-background-color); 
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  }
`;

export const StyledHeaderBurger = styled.div<{active: boolean}>`
  display: none;
  @media (max-width: 992px) {
    & {
      width: 30px;
      height: 20px;
      color: var(--item-color);
      display: grid;
      align-items: center;
      grid-template: repeat(3, 8px) / 1fr;
      position: relative;

      &:before,
      &:after {
        content: "";
        background-color: var(--item-color);
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
        background-color: var(--item-color);
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        display: ${({active}) => active ? "none" : ""};
      }

      &:before {
        transform: ${({active}) => active ? "rotate(45deg)" : ""};
        top: ${({active}) => active ? "8px" : ""};
      }

      &:after {
        transform: ${({active}) => active ? "rotate(-45deg)" : ""};
        bottom: ${({active}) => active ? "9px" : ""};
      }
    }
  }
`;
