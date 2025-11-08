import styled from "styled-components";

export const StyledWrapper = styled.div`
	min-height: 100%;
	background-color: var(--background-color);
	display: grid;
	grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
	grid-template-areas: 
		"header"
		"main"
		"footer";
`;