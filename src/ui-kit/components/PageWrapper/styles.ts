import styled from "styled-components";

export const StyledPageWrapper = styled.div<{$bgColor: React.CSSProperties['backgroundColor']}>`
	min-height: 100vh;
	width: 100%;
	background-color: ${({$bgColor}) => $bgColor};
	display: grid;
	grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
	grid-template-areas: 
		"header"
		"main"
		"footer";
`;

export const StyledHeaderWrapper = styled.div`
	grid-area: header;
`;

export const StyledBodyWrapper = styled.div`
	grid-area: main;
`;

export const StyledFooterWrapper = styled.div`
	grid-area: footer;
`;
