import styled from "styled-components";

export const StyledAboutMeBlock = styled.section`
	background-color: var(--main-color);
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: var(--box-shadow);
`;

export const StyledAboutMeBlockContent = styled.div`
    display: grid;
	gap: 10px;
    grid-template: auto auto / minmax(200px, 500px) auto;
	box-sizing: border-box;
	width: 100%;

    @media (max-width: 770px) {
		display: block;
	}
`;

export const StyledHr = styled.hr`
    border-bottom: 2px solid var(--main-color);
    margin: 0px -15px 15px -15px;
	box-sizing: border-box;
`;

export const StyledAboutMeImage = styled.div`
	margin: 0 auto;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	box-sizing: border-box;
	padding-bottom: 10px;

	@media (min-width: 770px) {
		max-width: 500px;
		padding: 0;
	}
`;

export const StyledSwiperImage = styled.img`
	width: 100%;
	padding: 1px;
	object-fit: contain;
	border-radius: 10px;
	box-sizing: border-box;
	opacity: var(--opacity-value);
`;
