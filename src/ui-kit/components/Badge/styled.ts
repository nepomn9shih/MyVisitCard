import styled from "styled-components";

export const StyledBadge = styled.a<{
    $color: React.CSSProperties['color'];
    $bgColor: React.CSSProperties['backgroundColor'];
    $hoverColor: React.CSSProperties['color'];
    $activeColor: React.CSSProperties['color'];
    $activeBgColor: React.CSSProperties['backgroundColor'];
}>`
    color: ${({$color}) => $color};
    background-color: ${({$bgColor}) => $bgColor};
    border-radius: 10px;
    margin: 5px;
    padding: 4px 5px 6px 5px;
    box-shadow: var(--box-shadow);

    &:hover {
        transition: 0.5s;
        background-color: ${({$activeBgColor}) => $activeBgColor};
        box-shadow: var(--box-shadow-hover);
        color: ${({$hoverColor}) => $hoverColor};
    }

    &.active {color:${({$activeColor}) => $activeColor};}
    &:visited {${({$color}) => $color};}
    &:visited:hover {color: ${({$hoverColor}) => $hoverColor};}
`;