import styled from "styled-components";
import {
  darkMainColor,
  mainColor,
} from "../Colours";

export const HeaderBlock = styled.div`
  grid-area: header;
    padding: 15px;
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    display: grid;
    grid-template: 1fr / 1fr minmax(auto, 100px) minmax(auto, 150px) minmax(auto, 1100px) 1fr;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;