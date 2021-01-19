import styled from "styled-components";
import {
    activeColor,
    backgroundColor,
    darkActiveColor,
    darkBackgroundColor,
    darkItemColor,
  darkMainColor,
  darkSecondaryColor,
  itemColor,
  mainColor,
  secondaryColor,
} from "../../Colours";

export const ProjectsBlock = styled.section`
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
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
        background-color: ${(props) => (props.dark ? darkItemColor : itemColor)};
        padding: 15px;
        &:hover {
            padding: 10px;
            transition: 0.5s;
        }
    }
`;

export const ProjectsName = styled.a`
    font-size: 20px;
    color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    line-height: 30px;
    margin: 0px 0px 0px 0px;
    background-color: ${backgroundColor};
    padding: 15px;
    text-align: center;
    &:hover {
        color: ${(props) => (props.dark ? darkSecondaryColor : itemColor)};
    }
`;

export const ProjectsTechnologies = styled.div`
    font-size: 16px;
    padding: 15px;
    text-align: center;
    background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
    display: flex;
    flex-wrap: wrap;
    a {
        color: ${(props) => (props.dark ? darkMainColor : mainColor)};
        &:visited {color: ${(props) => (props.dark ? darkMainColor : mainColor)};}
        &:visited:hover {color: ${(props) => (props.dark ? darkMainColor : mainColor)};}
    }
`;

export const ProjectsDescription = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
    border-bottom-left-radius: 10px;
    color: ${(props) => (props.dark ? darkSecondaryColor : darkItemColor)};
    background-color: ${(props) => (props.dark ? darkItemColor : itemColor)};
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const ProjectsButton = styled.a`
    color: ${(props) => (props.dark ? darkItemColor : itemColor)};
    background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 15px;
    justify-self: end;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    &:hover {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        transition: 0.5s;
        color: $mainColor;
    }
`;