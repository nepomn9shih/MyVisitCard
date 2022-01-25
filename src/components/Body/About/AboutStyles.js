import styled from "styled-components";
import {
	BACKGROUND_COLOR,
	DARK_MAIN_COLOR,
	ITEM_COLOR,
	MAIN_COLOR,
} from "../../Colours";

export const AboutBlock = styled.section`
    in-height: 400px;
    background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const AboutText = styled.div`
    background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    min-height: 356px;
    p {
        font-size: 18px;
        line-height: 22px;
    }
    b {
        color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR}
    }
`;