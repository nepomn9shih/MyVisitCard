import styled from "styled-components";
import {
	DARK_MAIN_COLOR,
	MAIN_COLOR,
	ITEM_COLOR,
	BACKGROUND_COLOR
} from "../../../constants/colors";
import {ContentTitle} from "../Skills/styles";

export const AboutMeBlock = styled.section<{dark: boolean}>`
	background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    display: grid;
	gap: 10px;
    grid-template: auto auto / minmax(200px, 500px) auto;
	box-sizing: border-box;
	width: 100%;

    @media (max-width: 770px) {
		display: block;
	}
`;

export const AboutMeTitle = styled(ContentTitle)<{dark: boolean}>`
	grid-column: span 2;
`;

export const Hr = styled.hr<{dark: boolean}>`
    border-bottom: 2px solid ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    margin: 0px -15px 15px -15px;
	box-sizing: border-box;
`;

export const AboutMeText = styled.div<{dark: boolean}>`
	font-size: 18px;
    line-height: 22px;
    background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    border-radius: 10px;
    padding: 15px 15px 20px 15px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
	box-sizing: border-box;
`;

export const AboutMeImage = styled.div<{dark: boolean}>`
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

export const StyledSwiperImage = styled.img<{dark: boolean}>`
	width: 100%;
	padding: 1px;
	object-fit: contain;
	border-radius: 10px;
	box-sizing: border-box;
	opacity: ${({dark}) => dark ? "80%" : "100%"};
`;
