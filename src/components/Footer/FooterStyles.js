import styled from "styled-components";
import {
    darkMainColor,
    mainColor,
} from "../Colours";

export const FooterBlock = styled.div`
    color: ivory;
    grid-area: footer;
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)}; 
    padding: 15px;
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;