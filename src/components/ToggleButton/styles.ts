import styled from "styled-components";
import {
	ACTIVE_COLOR,
	BACKGROUND_COLOR,
	DARK_ITEM_COLOR,
	DARK_SECONDARY_COLOR,
	ITEM_COLOR,
	SECONDARY_COLOR
} from "../../constants/colors";

export const ButtonContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Toggle = styled.input` 
    position: relative;
    width: 50px;
    height: 25px;
    margin: 0;
    vertical-align: top;
    background: ${ITEM_COLOR};
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);

	&:after {
	content: "";
	position: absolute;
	left: 1.5px;
	top: 0.75px;
	width: 23.5px;
	height: 23.5px;
	background-color: ${SECONDARY_COLOR};
	border-radius: 50%;
	transform: translateX(0);
	transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
	}

	&:checked:after {
	transform: translateX(100%);
	background-color: ${DARK_SECONDARY_COLOR};
	}

	&:checked {
	background-color: ${DARK_ITEM_COLOR};
	}
`;

export const ToggleLabel = styled.label<{dark: boolean}>` 
    cursor: pointer;
    margin-left: 10px;
    color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    font-size: 18px;

    &:hover {
      color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : ACTIVE_COLOR};
    }
`;