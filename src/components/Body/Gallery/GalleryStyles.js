import styled from "styled-components";
import {
  darkMainColor,
  mainColor,
  itemColor,
  backgroundColor
} from "../../Colours";
import { ContentTitle } from "../Skills/skillsStyles";

export const GalleryBlock = styled.section`
    background-color: ${(props) => (props.dark ? darkMainColor : mainColor)};
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const GalleryItems = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const GalleryItem = styled.div`
    position: relative;
    padding: 0px 0px 85% 0px;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
        opacity: ${(props) => (props.dark ? "70%" : "100%")};
        &:hover {
            border: 5px solid transparent;
            transition: 0.5s;
            box-shadow: 5px 5px 10px rgba(0,0,0,0.0);
        }
    }
    @media (min-width: 992px) {
    & {
        grid-column: ${(props) => (props.isBig ? "span 2" : "")};
        grid-row: ${(props) => (props.isBig ? "span 2" : "")};
    }
}
`;