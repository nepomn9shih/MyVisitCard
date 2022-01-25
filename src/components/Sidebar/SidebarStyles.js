import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    ACTIVE_COLOR,
    BACKGROUND_COLOR,
    DARK_ITEM_COLOR,
    DARK_MAIN_COLOR,
    DARK_SECONDARY_COLOR,
    ITEM_COLOR,
    MAIN_COLOR,
    SECONDARY_COLOR
} from "../Colours";

export const SidebarBlock = styled.aside`
	background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
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

export const SidebarList = styled.ul`
    li{
        margin: 0px 0px 15px 0px;
        font-size: 18px;
    }
`;

export const SidebarLink = styled(NavLink)`
    color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
    font-size: 20px;
    margin: 5px 0px 5px 5px;

    &:hover {
        color: ${({dark}) => dark ? DARK_MAIN_COLOR : ACTIVE_COLOR};
    }

    &.active {
        color: ${({dark}) => dark ? BACKGROUND_COLOR : MAIN_COLOR};
        background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : ITEM_COLOR};
        padding: 3px 5px 5px 5px;
        margin: 5px 0px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    }
`;

