import styled from "styled-components";
import {
    darkSecondaryColor,
    secondaryColor,
} from "../Colours";

export const SidebarBlock = styled.aside`
  background-color: ${(props) => (props.dark ? darkSecondaryColor : secondaryColor)};
    border-radius: 10px;
    padding: 30px 30px 15px 30px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    margin: 0px 0px 20px 0px;
    @media (min-width: 992px) {
        & {
            grid-column: 2 / 3;
        }
    }
`;