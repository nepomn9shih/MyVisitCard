import styled from "styled-components";

export const StyledBodyMain = styled.section`
    padding: 30px 15px;
    width: 100vw;

    @media (min-width: 992px) {
      grid-area: main;
      display: grid;
      grid-template: 1fr / 1fr minmax(auto, 200px) minmax(auto, 950px) 1fr;
    }
`;

export const StyledBodyContent = styled.section`
    margin: 0px 0px 20px 00px;

    @media (min-width: 992px) {
    & {
        grid-column: 3 / 4;
        padding: 0px 0px 0px 30px;
    }
}
`;

export const StyledSkillCellItem = styled.a`
  color: var(--main-color);
  background-color: var(--item-color);
  border-radius: 10px;
  margin: 5px;
  padding: 4px 5px 6px 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.5s;
    background-color: var(--active-color);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    color: var(--main-color);
  }
  &:visited {color: var(--main-color);}
  &:visited:hover {color: var(--main-color);}
`;
