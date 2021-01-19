import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    activeColor,
    darkItemColor,
    darkMainColor,
    darkSecondaryColor,
    itemColor,
    mainColor,
    secondaryColor,
} from "../Colours";

export const SidebarBlock = styled.aside`
  background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
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
    color: ${(props) => (props.dark ? darkItemColor : itemColor)};
    font-size: 20px;
    margin: 5px 0px 5px 5px;
    &:hover {
        color: ${activeColor};
    }
    &.active {
        color: ${(props) => (props.dark ? itemColor : mainColor)};
        background-color: ${(props) => (props.dark ? darkMainColor : itemColor)};
        padding: 3px 5px 5px 5px;
        margin: 5px 0px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    }
`;

