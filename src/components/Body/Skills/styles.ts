import styled from "styled-components";
import {
	ACTIVE_COLOR,
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	MAIN_COLOR,
	SECONDARY_COLOR,
	ITEM_COLOR,
	DARK_ITEM_COLOR,
	BACKGROUND_COLOR
} from "../../../constants/colors";

export const SkillsBlock = styled.div<{dark: boolean}>`
  min-height: 476px;
  background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const ContentTitle = styled.h1<{dark: boolean}>`
  margin: 0px 0px 20px 0px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
  border-radius: 10px;
  color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const SkillsText = styled.div<{dark: boolean}>`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;

  a {
    color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
  }
`;

export const SkillCellItem = styled.a<{dark: boolean}>`
  background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.5s;
    background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : ACTIVE_COLOR};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
  }
`;
