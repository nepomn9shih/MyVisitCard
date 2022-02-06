import styled from "styled-components";
import {
	ACTIVE_COLOR,
	BACKGROUND_COLOR,
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	ITEM_COLOR,
	MAIN_COLOR
} from "../../../constants/colors";

export const HobbyBlock = styled.section<{dark: boolean}>`
    background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const HobbyItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    font-size: 20px;
`;

export const HobbyImage = styled.div<{dark: boolean}>`
    position: relative;
    padding: 0px 0px 100% 0px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        opacity: ${({dark}) => dark ? "80%" : "100%"};
    }
`;

export const HobbyCellItem = styled.div<{dark: boolean; isChosen: boolean}>`
    background-color: ${({isChosen, dark}) => isChosen? ACTIVE_COLOR : dark ? BACKGROUND_COLOR : ITEM_COLOR};
    border-radius: 10px;
    margin: 5px;
    padding: 4px 5px 6px 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    &:hover {
        transition: 0.5s;
        background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : ACTIVE_COLOR};
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    }
`;