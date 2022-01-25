import styled from "styled-components";
import {
	BACKGROUND_COLOR,
	DARK_ITEM_COLOR,
	DARK_MAIN_COLOR,
	DARK_SECONDARY_COLOR,
	ITEM_COLOR,
	MAIN_COLOR,
	SECONDARY_COLOR
} from "../../Colours";

export const ProjectsBlock = styled.section`
    background-color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const ProjectsItems = styled.div`
    display: grid;
    column-gap: 20px;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const ProjectsItem = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template: auto auto auto 1fr minmax(40px, auto) / 1fr;
`;

export const ProjectsImage = styled.a`
    position: relative;
    padding: 0px 0px 90% 0px;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
        padding: 15px;
        opacity: ${({dark}) => dark ? "80%" : "100%"};
        &:hover {
            padding: 10px;
            transition: 0.5s;
        }
    }
`;

export const ProjectsName = styled.a`
    font-size: 20px;
    color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
    line-height: 30px;
    margin: 0px 0px 0px 0px;
    background-color: ${BACKGROUND_COLOR};
    padding: 15px;
    text-align: center;
    &:hover {
        color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : ITEM_COLOR};
    }
`;

export const ProjectsTechnologies = styled.div`
    font-size: 16px;
    padding: 15px;
    text-align: center;
    background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
    display: flex;
    flex-wrap: wrap;
    a {
        color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};
        &:visited {color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};}
        &:visited:hover {color: ${({dark}) => dark ? DARK_MAIN_COLOR : MAIN_COLOR};}
    }
`;

export const ProjectsDescription = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
    border-bottom-left-radius: 10px;
    color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : DARK_ITEM_COLOR};
    background-color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const ProjectsButton = styled.a`
    color: ${({dark}) => dark ? DARK_ITEM_COLOR : ITEM_COLOR};
    background-color: ${({dark}) => dark ? DARK_SECONDARY_COLOR : SECONDARY_COLOR};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 15px;
    justify-self: end;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

    &:hover {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        transition: 0.5s;
        color: ${MAIN_COLOR};
    }
`;