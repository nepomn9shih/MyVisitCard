import styled from "styled-components";
import { BACKGROUND_COLOR, DARK_BACKGROUND_COLOR } from "../constants/colors";

export const StyledWrapper = styled.div<{dark: boolean}>`
	min-height: 100%;
	background-color: ${({dark}) => dark ? DARK_BACKGROUND_COLOR : BACKGROUND_COLOR};
	display: grid;
	grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
	grid-template-areas: 
		"header"
		"main"
		"footer";
`;