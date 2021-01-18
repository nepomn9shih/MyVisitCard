import styled from "styled-components";
import { backgroundColor, darkBackgroundColor } from "./Colours";

export const Wrapper = styled.div`
   min-height: 100%;
    background-color: ${(props) => (props.dark ? darkBackgroundColor : backgroundColor)};
    display: grid;
    grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
    grid-template-areas: 
    "header"
    "main"
    "footer";
`;