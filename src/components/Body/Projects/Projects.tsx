import {ContentTitle, SkillCellItem} from "../styles";
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

export const Projects = () => {
  return (
    <ProjectsBlock>
      <ContentTitle>
        Мои проекты
      </ContentTitle>
      <ProjectsItems>
        {projectsData
          .slice(0)
          .reverse()
          .map((project, index) => {
            return (
              <ProjectsItem key={index}>
                <ProjectsImage
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.img} alt="" />
                </ProjectsImage>
                <ProjectsName
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </ProjectsName>
                <ProjectsTechnologies>
                  {project.technologies.map((tech, index) => {
                    return (
                      <SkillCellItem
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
                <ProjectsDescription>
                  {project.description}
                </ProjectsDescription>
                <ProjectsButton
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
