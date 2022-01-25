import styled from "styled-components";
import {
	ACTIVE_COLOR,
	BACKGROUND_COLOR,
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	ITEM_COLOR,
	MAIN_COLOR,
	SECONDARY_COLOR
} from "../Colours";

export const HeaderBlock = styled.div`
  grid-area: header;
  padding: 15px;
  background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 100px) minmax(auto, 150px) minmax(
      auto,
      1100px
    ) 1fr;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const HeaderList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-items: end;

  li {
    align-self: center;
  }

  @media (max-width: 992px) {
    & {
      display: ${({isOpen}) => isOpen ? "block" : "none"};
      position: absolute;
      top: 90px;
      background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
      padding: 19px;
      border-radius: 10px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

      li {
        padding: 15px;
      }
    }
`;

export const HeaderLogo = styled.div`
  grid-column: 2 / 3;

  img {
    width: 70px;
    height: 70px;
    opacity: ${({dark}) => dark ? "80%" : "100%"};
    border-radius: 50%;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export const HeaderName = styled.b`
  font-size: 30px;
  color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
`;

export const HeaderMenu = styled.nav`
  grid-column: 4 / 5;
  @media (max-width: 992px) {
    & {
      display: grid;
      justify-items: end;
      position: relative;
    }
  }
`;

export const HeaderLink = styled.a`
  color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
  font-size: 18px;

  &:hover {
    color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : ACTIVE_COLOR};
  }

  &.active {
    color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
  }
`;

export const HeaderBurger = styled.div`
  display: none;
  @media (max-width: 992px) {
    & {
      width: 30px;
      height: 20px;
      color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
      display: grid;
      align-items: center;
      grid-template: repeat(3, 8px) / 1fr;
      position: relative;

      &:before,
      &:after {
        content: "";
        background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
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
        background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
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
