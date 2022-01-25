import styled from "styled-components";
import {
	DARK_MAIN_COLOR,
	MAIN_COLOR,
	ITEM_COLOR,
	BACKGROUND_COLOR
} from "../../Colours";
import { ContentTitle } from "../Skills/styles";

export const AboutMeBlock = styled.section<{dark: boolean}>`
	background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    display: grid;
    grid-template: auto auto / minmax(200px, 500px) auto;

    @media (max-width: 770px) {
    & {
        display: block;
    }
}
`;

export const AboutMeTitle = styled(ContentTitle)<{dark: boolean}>`
	grid-column: span 2;
`;

export const Hr = styled.hr<{dark: boolean}>`
    border-bottom: 2px solid ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    margin: 0px -15px 15px -15px;
`;

export const AboutMeText = styled.div<{dark: boolean}>`
font-size: 18px;
    line-height: 22px;
    background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    border-radius: 10px;
    padding: 15px 15px 20px 15px;
    margin-left: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

    @media (max-width: 770px) {
    & {
      margin-left: 0px;
    }
}
`;

export const AboutMeImage = styled.div<{dark: boolean}>`
	margin: 0 auto;
	width: 100%;

	img {
		width: 100%;
		object-fit: contain;
		border-radius: 10px;
		opacity: ${({dark}) => dark ? "80%" : "100%"};
	}

	@media (max-width: 770px) {
		& {
			margin: 0 auto;
			max-width: 500px;
			img {
				width: 100%;
			}
		}
	}
`;


