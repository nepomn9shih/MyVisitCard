import {Box} from "../../../ui-kit/components/Box";
import {Section} from "../../../ui-kit/components/Section";
import {Text} from "../../../ui-kit/components/Text";
import {getSearchUrl} from "../../../ui-kit/utils/getSearchUrl";
import {StyledSkillCellItem} from "../styles";
import {projectsData} from "./assets/projectsData";
import {
  StyledProjectsItems,
  StyledProjectsItem,
  StyledProjectsImage,
  StyledProjectsName,
  StyledProjectsButton
} from "./styles";

/** Раздел "Мои проекты" */
export const Projects = () => {
  return (
    <Section
      className="qa-projects-block"
      text='Мои проекты'
    >
      <StyledProjectsItems className="qa-projects-block-items">
        {projectsData
          .slice(0)
          .reverse()
          .map((project, index) => {
            return (
              <StyledProjectsItem
                key={index}
                className={`qa-projects-block-item-${index}`}
              >
                <StyledProjectsImage
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className='qa-projects-block-item-image'
                >
                  <img src={project.img} alt="" />
                </StyledProjectsImage>
                <StyledProjectsName
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className='qa-projects-block-item-name'
                >
                  <Text
                    variation='titleM'
                    text={project.name}
                  />
                </StyledProjectsName>
                <Box
                  className='qa-projects-block-item-technologies'
                  p='15px'
                  bgColor='var(--secondary-color)'
                  display='flex'
                  flexWrap='wrap'
                >
                  {project.technologies.map((tech, index) => {
                    return (
                      <StyledSkillCellItem
                        href={getSearchUrl(tech)}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        className={`qa-projects-block-item-technology-${index}`}
                      >
                        <Text variation='descriptionL' text={tech} />
                      </StyledSkillCellItem>
                    );
                  })}
                </Box>
                <Box
                  className='qa-projects-block-item-description'
                  p='15px'
                  borderRadius='0 0 0 10px'
                  color='var(--secondary-text-color)'
                  bgColor='var(--item-color)'
                  boxShadow='var(--box-shadow)'
                >
                  <Text variation='descriptionM' text={project.description} />
                </Box>
                <StyledProjectsButton
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className='qa-projects-block-item-link'
                >
                  <Text variation='descriptionS' text='Ссылка' />
                </StyledProjectsButton>
              </StyledProjectsItem>
            );
          })}
      </StyledProjectsItems>
    </Section>
  );
};
