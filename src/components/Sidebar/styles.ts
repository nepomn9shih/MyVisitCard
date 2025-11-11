import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledSidebarBlock = styled.aside`
	background-color: var(--sidebar-bg-color);
    border-radius: 10px;
    padding: 30px 30px 15px 30px;
    box-shadow: var(--box-shadow);
    margin: 0px 0px 20px 0px;

    @media (min-width: 992px) {
        grid-column: 2 / 3;
    }
`;

export const StyledSidebarLink = styled(NavLink)`
    color: var(--primary-text-color);
    margin: 5px 0px;
    padding: 3px 5px 5px;
    border-radius: 10px;

    &:hover {
        color: var(--primary-text-color);
    }

    &.active {
        color: var(--secondary-text-color);
        background-color: var(--secondary-bg-color); 
        box-shadow: var(--box-shadow);
    }
`;

