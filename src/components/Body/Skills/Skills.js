import skillsList from "./skillsList";
import { ContentTitle, SkillCellItem, SkillsBlock, SkillsText } from "./skillsStyles";


const Skills = () => {
  return (
    <SkillsBlock>
      <ContentTitle>Мои навыки</ContentTitle>
      <SkillsText>
        {skillsList.map((skill, index) => {
          return (
            <SkillCellItem
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

export default Skills;
