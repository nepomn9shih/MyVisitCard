import {Box} from "../../../ui-kit/components/Box";
import {ContentTitleBlock} from "../../../ui-kit/components/ContentTitleBlock";
import {Text} from "../../../ui-kit/components/Text";
import {getSearchUrl} from "../../../ui-kit/utils/getSearchUrl";
import {StyledSkillCellItem} from "../styles";
import {skillsList} from "./skillsList";
import {StyledSkillsBlock} from "./styles";

/** Раздел "Мои навыки" */
export const Skills = () => {
  return (
     <StyledSkillsBlock className="qa-skills-block">
      <ContentTitleBlock text='Мои навыки' />
      <Box
        className="qa-skills-block-items"
        display='flex'
        flexWrap='wrap'
      >
        {skillsList.map((skill, index) => {
          return (
            <StyledSkillCellItem
              className={`qa-skills-block-item-${index}`}
              href={getSearchUrl(skill)}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              <Text variation='descriptionL' text={skill} />
            </StyledSkillCellItem>
          );
        })}
      </Box>
    </StyledSkillsBlock>
  );
};
