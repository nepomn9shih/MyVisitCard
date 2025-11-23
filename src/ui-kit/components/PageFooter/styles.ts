import styled from "styled-components";

export const StyledFooterBlock = styled.div<{
    $bgColor: React.CSSProperties['backgroundColor'];
}>`
    background-color: ${({$bgColor}) => $bgColor};
    height: 70px;
    padding: 15px;
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: var(--box-shadow);
`;