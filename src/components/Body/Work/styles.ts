import styled from "styled-components";

export const StyledWorkBlock = styled.section`
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const StyledWorkItems = styled.div`
    display: grid;
    column-gap: 20px;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const StyledWorkItem = styled.div`
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    background-color: var(--background-color);
    border-radius: 15px;
    grid-template: 50px 70px 200px 50px 1fr/ 1fr;
`;

export const StyledWorkImage = styled.div`
    padding: 10px 0px 10px 0px;
    text-align: center;
    background-color: var(--secondary-background-color);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-height: 180px;
        max-width: 220px;
        padding: 5px;

        &:hover {
            padding: 0px;
            transition: 0.5s;
        }
    }
`;
