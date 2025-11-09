import styled from "styled-components";

export const StyledSkillsBlock = styled.div`
  min-height: 476px;
  background-color: var(--main-color);
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const StyledSkillsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;

  a {
    color: var(--main-color);
  }
`;
