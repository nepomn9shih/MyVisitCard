import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledSidebarBlock = styled.aside<{
    $bgColor: React.CSSProperties['backgroundColor'];
}>`
	background-color: ${({$bgColor}) => $bgColor};
    border-radius: 10px;
    padding: 30px 30px 15px 30px;
    box-shadow: var(--box-shadow);
    margin: 0px 0px 20px 0px;
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        grid-column: 2 / 3;
    }
`;

export const StyledSidebarLink = styled(NavLink)<{
    $color: React.CSSProperties['color'];
    $hoverColor: React.CSSProperties['color'];
    $activeColor: React.CSSProperties['color'];
    $activeBgColor: React.CSSProperties['backgroundColor'];
}>`
    color: ${({$color}) => $color};
    margin: 5px 0px;
    padding: 3px 5px 5px;
    border-radius: 10px;

    &:hover {
        color: ${({$hoverColor}) => $hoverColor};
    }

    &.active {
        color: ${({$activeColor}) => $activeColor};
        background-color: ${({$activeBgColor}) => $activeBgColor}; 
        box-shadow: var(--box-shadow);
    }
`;

