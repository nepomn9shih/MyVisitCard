import styled from "styled-components";

export const BodyMain = styled.section`
    padding: 30px 15px;
    width: 100vw;

    @media (min-width: 992px) {
    & {
        grid-area: main;
        display: grid;
        grid-template: 1fr / 1fr minmax(auto, 200px) minmax(auto, 950px) 1fr;
    }
}
`;

export const BodyContent = styled.section`
    margin: 0px 0px 20px 00px;

    @media (min-width: 992px) {
    & {
        grid-column: 3 / 4;
        padding: 0px 0px 0px 30px;
    }
}
`;
