import styled from "styled-components";

const mainColor = 'indigo';
const secondaryColor = 'darkorchid';
const activeColor = 'goldenrod'

export const SkillsBlock = styled.div`
  min-height: 476px;
  background-color: ${mainColor};
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const ContentTitle = styled.h1`
margin: 0px 0px 20px 0px;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    background-color: ${secondaryColor};
    border-radius: 10px;
    color: ivory;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const SkillsText = styled.div`
  display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    a {
        color: ${mainColor};
        &:visited {color: ${mainColor};}
    }
`;

export const SkillCellItem = styled.a`
  background-color: ivory;
    border-radius: 10px;
    margin: 5px;
    padding: 4px 5px 6px 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    &:hover {
        // padding: 5px 10px;
        transition: 0.5s;
        background-color: ${activeColor};
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    }
`;