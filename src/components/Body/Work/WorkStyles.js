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

export const WorkBlock = styled.section`
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
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

export const WorkItem = styled.div`
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    background-color:${(props) => (props.dark ? darkItemColor : backgroundColor)};
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

export const WorkDateItem = styled.div`
    background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
    border-radius: 10px;
    margin: 2px;
    padding: 4px 5px 4px 5px;
    color:$mainColor;
    &:hover {
        transition: 0.5s;
        background-color: ${(props) => (props.dark ? darkSecondaryColor : activeColor)};
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    }
`;

export const WorkName = styled.div`
    font-size: 20px;
    color: ${(props) => (props.dark ? darkItemColor : itemColor)};
    padding: 15px;
    background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
    display: grid;
    align-items: center;
    &:hover {
        color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    }
`;

export const WorkImage = styled.div`
    padding: 10px 0px 10px 0px;
    text-align: center;
    background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-height: 180px;
        max-width: 220px;
        padding: 5px;
        opacity: ${(props) => (props.dark ? "90%" : "100%")};
        &:hover {
            padding: 0px;
            transition: 0.5s;
        }
    }
`;

export const WorkPosition = styled.div`
    font-size: 16px;
    color: ${(props) => (props.dark ? darkItemColor : itemColor)};
    padding: 15px;
    background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
`;

export const WorkDescription = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
    background-color: ${(props) => (props.dark ? darkItemColor : backgroundColor)};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const WorkCellItem = styled.div`
  background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.5s;
    background-color: ${(props) => (props.dark ? darkSecondaryColor : activeColor)};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    color: ${(props) => (props.dark ? darkItemColor : mainColor)};
  }
`;