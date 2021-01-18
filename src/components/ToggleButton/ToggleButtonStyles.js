import styled from "styled-components";
import { darkItemColor, darkSecondaryColor, itemColor, secondaryColor } from "../Colours";

export const ButtonContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Toggle = styled.input` 
    position: relative;
    width: 50px;
    height: 25px;
    margin: 0;
    vertical-align: top;
    background: ${itemColor};
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);

&:after {
  content: "";
  position: absolute;
  left: 1.5px;
  top: 0.75px;
  width: 23.5px;
  height: 23.5px;
  background-color: ${secondaryColor};
  border-radius: 50%;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
}

&:checked:after {
  transform: translateX(100%);
  background-color: ${darkSecondaryColor};
}

&:checked {
  background-color: ${darkItemColor};
}
`;

export const ToggleLabel = styled.label` 
    cursor: pointer;
    margin-left: 10px;
    color: ivory;
    font-weight: 600;
`;