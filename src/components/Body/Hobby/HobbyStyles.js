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

export const HobbyBlock = styled.section`
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const HobbyItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    font-size: 20px;
`;

export const HobbyImage = styled.div`
    position: relative;
    padding: 0px 0px 100% 0px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const HobbyCellItem = styled.div`
    background-color: ${(props) => (props.isChosen? activeColor : props.dark ? backgroundColor : itemColor)};
    border-radius: 10px;
    margin: 5px;
    padding: 4px 5px 6px 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    &:hover {
        transition: 0.5s;
        background-color: ${(props) => (props.dark ? darkSecondaryColor : activeColor)};
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    }
`;