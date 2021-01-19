import styled from "styled-components";
import {
  activeColor,
  darkMainColor,
  darkSecondaryColor,
  mainColor,
  secondaryColor,
  itemColor,
  darkItemColor,
  backgroundColor,
} from "../../Colours";

export const SkillsBlock = styled.div`
  min-height: 476px;
  background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const ContentTitle = styled.h1`
  margin: 0px 0px 20px 0px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  background-color: ${(props) =>
    props.dark ? darkSecondaryColor : secondaryColor};
  border-radius: 10px;
  color: ${(props) => (props.dark ? darkItemColor : itemColor)};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const SkillsText = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  a {
    color: ${(props) => (props.dark ? darkMainColor : mainColor)};
  }
`;

export const SkillCellItem = styled.a`
  background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.5s;
    background-color: ${(props) => (props.dark ? darkSecondaryColor : activeColor)};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    color: ${(props) => (props.dark ? darkMainColor : mainColor)};
  }
`;
