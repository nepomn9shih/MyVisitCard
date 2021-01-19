import styled from "styled-components";
import {
  activeColor,
  backgroundColor,
  darkMainColor,
  darkSecondaryColor,
  itemColor,
  mainColor,
  secondaryColor,
} from "../Colours";

export const HeaderBlock = styled.div`
  grid-area: header;
  padding: 15px;
  background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
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
  li{
    align-self: center;
  }
  @media (max-width: 992px) {
    & {
      display: ${(props) => (props.isOpen ? "block" : "none")};
      position: absolute;
      top: 90px;
      background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
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
    opacity: ${(props) => (props.dark ? "60%" : "100%")};
    border-radius: 50%;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const HeaderName = styled.b`
  font-size: 30px;
  color: ${(props) => (props.dark ? backgroundColor : itemColor)};
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
  color: ${(props) => (props.dark ? backgroundColor : itemColor)};
  font-size: 18px;
  &:hover {
    color: ${(props) => (props.dark ? darkSecondaryColor : activeColor)};
  }
  &.active {
    color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
  }
`;

export const HeaderBurger = styled.div`
  display: none;
  @media (max-width: 992px) {
    & {
      width: 30px;
      height: 20px;
      color: ${(props) => (props.dark ? backgroundColor : itemColor)};
      display: grid;
      align-items: center;
      grid-template: repeat(3, 8px) / 1fr;
      position: relative;

      &:before,
      &:after {
        content: "";
        background-color: ${(props) =>
          props.dark ? backgroundColor : itemColor};
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
        background-color: ${(props) =>
          props.dark ? backgroundColor : itemColor};
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        display: ${(props) => (props.active ? "none" : "")};
      }
      &:before {
        transform: ${(props) => (props.active ? "rotate(45deg)" : "")};
        top: ${(props) => (props.active ? "8px" : "")};
      }
      &:after {
        transform: ${(props) => (props.active ? "rotate(-45deg)" : "")};
        bottom: ${(props) => (props.active ? "9px" : "")};
      }
    }
  }
`;
