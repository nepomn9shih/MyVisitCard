import { ContentTitle, SkillCellItem } from "../Skills/styles";
import {projectsData} from "./ProjectsData/projectsData";
import {
  ProjectsBlock,
  ProjectsItems,
  ProjectsItem,
  ProjectsImage,
  ProjectsName,
  ProjectsTechnologies,
  ProjectsDescription,
  ProjectsButton
} from "./styles";

export const Projects = ({isDarkMode}: {isDarkMode: boolean}) => {
  return (
    <ProjectsBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>Мои проекты</ContentTitle>
      <ProjectsItems>
        {projectsData
          .slice(0)
          .reverse()
          .map((project, index) => {
            return (
              <ProjectsItem key={index}>
                <ProjectsImage
                  dark={isDarkMode}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.img} alt="" />
                </ProjectsImage>
                <ProjectsName
                  dark={isDarkMode}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </ProjectsName>
                <ProjectsTechnologies dark={isDarkMode}>
                  {project.technologies.map((tech, index) => {
                    return (
                      <SkillCellItem
                        dark={isDarkMode}
                        href={"https://www.google.com/search?q=" + tech}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        {tech}{" "}
                      </SkillCellItem>
                    );
                  })}
                </ProjectsTechnologies>
                <ProjectsDescription dark={isDarkMode}>{project.description}</ProjectsDescription>
                <ProjectsButton
                  dark={isDarkMode}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ссылка
                </ProjectsButton>
              </ProjectsItem>
            );
          })}
      </ProjectsItems>
    </ProjectsBlock>
  );
};
