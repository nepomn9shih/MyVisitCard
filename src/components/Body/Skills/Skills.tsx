import {ContentTitleBlock} from "../../../ui-kit/components/ContentTitleBlock";
import {Text} from "../../../ui-kit/components/Text";
import {StyledSkillCellItem} from "../styles";
import {skillsList} from "./skillsList";
import {StyledSkillsBlock, StyledSkillsItems} from "./styles";

/** Раздел "Мои навыки" */
export const Skills = () => {
  return (
     <StyledSkillsBlock className="qa-skills-block">
      <ContentTitleBlock text='Мои навыки' />
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
              <Text variation='descriptionL' text={skill} />
            </StyledSkillCellItem>
          );
        })}
      </StyledSkillsItems>
    </StyledSkillsBlock>
  );
};
