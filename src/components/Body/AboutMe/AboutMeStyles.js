import styled from "styled-components";
import {
  darkMainColor,
  mainColor,
  itemColor,
  backgroundColor
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

export const AboutMeText = styled.div`
font-size: 18px;
    line-height: 22px;
    background-color: ${(props) => (props.dark ? backgroundColor : itemColor)};
    border-radius: 10px;
    padding: 15px 15px 20px 15px;
    margin-left: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    @media (max-width: 770px) {
    & {
      margin-left: 0px;
    }
}
`;

export const AboutMeImage = styled.div`
  margin: 0 auto;
  width: 100%;
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    opacity: ${(props) => (props.dark ? "70%" : "100%")};
  }
  @media (max-width: 770px) {
    & {
      margin: 0 auto;
      max-width: 500px;
      img {
        width: 100%;
      }
    }
    
}
`;


