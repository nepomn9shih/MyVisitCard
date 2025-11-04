import styled from "styled-components";
import {
    BACKGROUND_COLOR,
    DARK_ITEM_COLOR,
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	ITEM_COLOR,
	MAIN_COLOR,
	SECONDARY_COLOR
} from "../../../constants/colors";

export const WorkBlock = styled.section<{dark: boolean}>`
    background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const WorkItems = styled.div`
    display: grid;
    column-gap: 20px;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const WorkItem = styled.div<{dark: boolean}>`
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    background-color:${({dark}) => dark ? DARK_ITEM_COLOR : BACKGROUND_COLOR};
    border-radius: 15px;
    grid-template: 50px 70px 200px 50px 1fr/ 1fr;
`;

export const WorkDate = styled.div`
    display: grid;
    grid-template: 1fr/ 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 2px 0px;
`;

export const WorkDateItem = styled.div<{dark: boolean}>`
    background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    border-radius: 10px;
    margin: 2px;
    padding: 4px 5px 4px 5px;
    color: ${MAIN_COLOR};
`;

export const WorkName = styled.div<{dark: boolean}>`
    font-size: 20px;
    color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
    padding: 15px;
    background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
    display: grid;
    align-items: center;
`;

export const WorkImage = styled.div<{dark: boolean}>`
    padding: 10px 0px 10px 0px;
    text-align: center;
    background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-height: 180px;
        max-width: 220px;
        padding: 5px;
        opacity: ${({dark}) => dark ? "90%" : "100%"};

        &:hover {
            padding: 0px;
            transition: 0.5s;
        }
    }
`;

export const WorkPosition = styled.div<{dark: boolean}>`
    font-size: 16px;
    color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
    padding: 15px;
    background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
`;

export const WorkDescription = styled.div<{dark: boolean}>`
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
    background-color: ${({dark}) => dark ? DARK_ITEM_COLOR : BACKGROUND_COLOR};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const WorkCellItem = styled.div<{dark: boolean}>`
  background-color: ${({dark}) => dark ? BACKGROUND_COLOR : ITEM_COLOR};
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;