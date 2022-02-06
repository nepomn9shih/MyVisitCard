import styled from "styled-components";
import {
    BACKGROUND_COLOR,
    DARK_MAIN_COLOR,
    ITEM_COLOR,
    MAIN_COLOR
} from "../../constants/colors";

export const FooterBlock = styled.div<{dark: boolean}>`
    color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    grid-area: footer;
    background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR}; 
    padding: 15px;
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;