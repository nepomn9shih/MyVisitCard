import styled from "styled-components";

import {
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	MAIN_COLOR,
	SECONDARY_COLOR,
	ITEM_COLOR,
	DARK_ITEM_COLOR,
} from "../../../constants/colors";

export const VideoBlock = styled.div<{dark: boolean}>`
  min-height: 476px;
  background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const VideoTitle = styled.h1<{dark: boolean}>`
  margin: 0px 0px 20px 0px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
  border-radius: 10px;
  color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const VideoContent = styled.div<{dark: boolean}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
