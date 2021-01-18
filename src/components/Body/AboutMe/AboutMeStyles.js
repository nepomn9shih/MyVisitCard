import styled from "styled-components";
import {
  activeColor,
  darkMainColor,
  darkSecondaryColor,
  mainColor,
  secondaryColor,
  itemColor,
  darkItemColor,
} from "../../Colours";
import { ContentTitle } from "../Skills/skillsStyles";

export const AboutMeBlock = styled.section`
  background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    display: grid;
    grid-template: auto auto / minmax(200px, 500px) auto;
    @media (max-width: 770px) {
    & {
        display: block;
    }
}
`;

export const AboutMeTitle = styled(ContentTitle)`
grid-column: span 2;
`;

export const Hr = styled.hr`
    border-bottom: 2px solid ${(props) => (props.dark ? darkMainColor : mainColor)};
    margin: 0px -15px 15px -15px;
`;


