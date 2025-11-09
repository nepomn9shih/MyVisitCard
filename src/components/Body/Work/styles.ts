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

export const StyledWorkDate = styled.div`
    display: grid;
    grid-template: 1fr/ 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 2px 0px;
`;

export const StyledWorkDateItem = styled.div`
    background-color: var(--item-color);
    border-radius: 10px;
    margin: 2px;
    padding: 4px 5px 4px 5px;
    color: var(--main-color);
`;

export const StyledWorkName = styled.div`
    font-size: 20px;
    color: var(--main-text-color);
    padding: 15px;
    background-color: var(--secondary-color);
    display: grid;
    align-items: center;
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

export const StyledWorkPosition = styled.div`
    font-size: 16px;
    color: var(--main-text-color);
    padding: 15px;
    background-color: var(--secondary-color);
`;

export const StyledWorkDescription = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
    background-color: var(--background-color);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const StyledWorkCellItem = styled.div`
  background-color: var(--item-color);
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;