import styled from "styled-components";
import { BACKGROUND_COLOR, DARK_BACKGROUND_COLOR } from "./Colours";

export const Wrapper = styled.div`
	min-height: 100%;
	background-color: ${({dark}) => dark ? DARK_BACKGROUND_COLOR : BACKGROUND_COLOR};
	display: grid;
	grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
	grid-template-areas: 
		"header"
		"main"
		"footer";
`;