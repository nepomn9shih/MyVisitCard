import styled from "styled-components";
import {
  backgroundColor,
  darkMainColor,
    darkSecondaryColor,
    itemColor,
  mainColor,
} from "../../Colours";

export const AboutBlock = styled.section`
    in-height: 400px;
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const AboutText = styled.div`
    background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    min-height: 356px;
    p {
        font-size: 18px;
        line-height: 22px;
    }
    b {
        color: ${(props) => (props.dark ? darkMainColor : mainColor)}
    }
`;