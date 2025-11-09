import {ContentTitleBlock} from "../../../ui-kit/components/ContentTitleBlock";
import {Text} from "../../../ui-kit/components/Text";
import {StyledSkillCellItem} from "../styles";
import {projectsData} from "./assets/projectsData";
import {
  StyledProjectsBlock,
  StyledProjectsItems,
  StyledProjectsItem,
  StyledProjectsImage,
  StyledProjectsName,
  StyledProjectsTechnologies,
  StyledProjectsDescription,
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
                  {project.name}
                </StyledProjectsName>
                <StyledProjectsTechnologies className='qa-projects-block-item-technologies'>
                  {project.technologies.map((tech, index) => {
                    return (
                      <StyledSkillCellItem
                        href={"https://www.google.com/search?q=" + tech}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        className={`qa-projects-block-item-technology-${index}`}
                      >
                        <Text variation='descriptionL' text={tech} />
                      </StyledSkillCellItem>
                    );
                  })}
                </StyledProjectsTechnologies>
                <StyledProjectsDescription className='qa-projects-block-item-description'>
                  {project.description}
                </StyledProjectsDescription>
                <StyledProjectsButton
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className='qa-projects-block-item-link'
                >
                  Ссылка
                </StyledProjectsButton>
              </StyledProjectsItem>
            );
          })}
      </StyledProjectsItems>
    </StyledProjectsBlock>
  );
};
