import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledSidebarBlock = styled.aside`
	background-color: var(--secondary-color);
    border-radius: 10px;
    padding: 30px 30px 15px 30px;
    box-shadow: var(--box-shadow);
    margin: 0px 0px 20px 0px;

    @media (min-width: 992px) {
        grid-column: 2 / 3;
    }
`;

export const StyledSidebarLink = styled(NavLink)`
    color: var(--main-text-color);
    margin: 5px 0px;
    padding: 3px 5px 5px;
    border-radius: 10px;

    &:hover {
        color: var(--main-text-color);
    }

    &.active {
        color: var(--description-text-color);
        background-color: var(--secondary-background-color); 
        box-shadow: var(--box-shadow);
    }
`;

