import { Box } from "../../../ui-kit/components/Box";
import {ContentTitleBlock} from "../../../ui-kit/components/ContentTitleBlock";
import {Text} from "../../../ui-kit/components/Text";
import {getSearchUrl} from "../../../ui-kit/utils/getSearchUrl";
import {StyledSkillCellItem} from "../styles";
import {projectsData} from "./assets/projectsData";
import {
  StyledProjectsBlock,
  StyledProjectsItems,
  StyledProjectsItem,
  StyledProjectsImage,
  StyledProjectsName,
  StyledProjectsButton
} from "./styles";

/** Раздел "Мои проекты" */
export const Projects = () => {
  return (
    <StyledProjectsBlock className="qa-projects-block">
      <ContentTitleBlock text='Мои проекты' />
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
                  color='var(--description-text-color)'
                  bgColor='var(--item-color)'
                  boxShadow='5px 5px 10px rgba(0,0,0,0.5)'
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
    </StyledProjectsBlock>
  );
};
