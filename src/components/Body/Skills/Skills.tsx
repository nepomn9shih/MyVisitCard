import {StyledContentTitle, StyledSkillCellItem} from "../styles";
import {skillsList} from "./skillsList";
import {StyledSkillsBlock, StyledSkillsItems} from "./styles";

/** Раздел "Мои навыки" */
export const Skills = () => {
  return (
     <StyledSkillsBlock className="qa-skills-block">
      <StyledContentTitle className="qa-skills-block-title">
        Мои навыки
      </StyledContentTitle>
      <StyledSkillsItems className="qa-skills-block-items">
        {skillsList.map((skill, index) => {
          return (
            <StyledSkillCellItem
              className={`qa-skills-block-item-${index}`}
              href={"https://www.google.com/search?q=" + skill}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {skill}
            </StyledSkillCellItem>
          );
        })}
      </StyledSkillsItems>
    </StyledSkillsBlock>
  );
};
