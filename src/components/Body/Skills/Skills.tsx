import {skillsList} from "./skillsList";
import { ContentTitle, SkillCellItem, SkillsBlock, SkillsText } from "./styles";

export const Skills = ({isDarkMode}: {isDarkMode: boolean}) => {

  return (
     <SkillsBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>Мои навыки</ContentTitle>
      <SkillsText dark={isDarkMode}>
        {skillsList.map((skill, index) => {
          return (
            <SkillCellItem
              dark={isDarkMode}
              href={"https://www.google.com/search?q=" + skill}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {skill}{" "}
            </SkillCellItem>
          );
        })}
      </SkillsText>
    </SkillsBlock>
  );
};
