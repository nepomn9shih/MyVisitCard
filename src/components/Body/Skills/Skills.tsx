import {Box} from "../../../ui-kit/components/Box";
import {Section} from "../../../ui-kit/components/Section";
import {Text} from "../../../ui-kit/components/Text";
import {getSearchUrl} from "../../../ui-kit/utils/getSearchUrl";
import {StyledSkillCellItem} from "../styles";
import {skillsList} from "./skillsList";

/** Раздел "Мои навыки" */
export const Skills = () => {
  return (
     <Section
      className="qa-skills-block"
      text='Мои навыки'
    >
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
    </Section>
  );
};
