import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledSidebarBlock = styled.aside`
	background-color: var(--secondary-color);
    border-radius: 10px;
    padding: 30px 30px 15px 30px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    margin: 0px 0px 20px 0px;

    @media (min-width: 992px) {
        & {
            grid-column: 2 / 3;
        }
    }
`;

export const StyledSidebarList = styled.ul`
    li{
        margin: 0px 0px 15px 0px;
        font-size: 18px;
    }
`;

export const StyledSidebarLink = styled(NavLink)`
    color: var(--main-text-color);
    font-size: 20px;
    margin: 5px 0px 5px 5px;

    &:hover {
        color: var(--main-text-color);
    }

    &.active {
        color: var(--description-text-color);
        background-color: var(--secondary-background-color);
        padding: 3px 5px 5px 5px;
        margin: 5px 0px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    }
`;

