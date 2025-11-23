import styled from "styled-components";

export const StyledFooterBlock = styled.div<{
    $bgColor: React.CSSProperties['backgroundColor'];
}>`
    grid-area: footer;
    background-color: ${({$bgColor}) => $bgColor};
    padding: 15px;
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: var(--box-shadow));
`;