import styled from "styled-components";

export const StyledButtonContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledToggle = styled.input` 
    position: relative;
    width: 50px;
    height: 25px;
    margin: 0;
    vertical-align: top;
    background: var(--item-color);
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
	background-color: var(--secondary-color);
	border-radius: 50%;
	transform: translateX(0);
	transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
	}

	&:checked:after {
	transform: translateX(100%);
	background-color: var()
	}

	&:checked {
	background-color: var(--secondary-background-color);
	}
`;

export const StyledToggleLabel = styled.label` 
    cursor: pointer;
    margin-left: 10px;
    color: var(--main-text-color);

    &:hover {
      color: var(--active-color);
    }
`;