import {Section} from "../../ui-kit/components/Section";
import {projectsData} from "./assets/projectsData";
import {ProjectItem} from "./ProjectItem";
import {StyledProjectsItems,} from "./styles";

/** Раздел "Мои проекты" */
export const Projects = () => {
	// Create a reversed copy of projectsData without mutating the original
	const reversedProjects = [...projectsData].reverse();

	return (
		<Section
			className="qa-projects-block"
			text='Мои проекты'
		>
			<StyledProjectsItems className="qa-projects-block-items">
				{reversedProjects.map((project, index) => (
					<ProjectItem
						key={project.name}
						project={project}
						index={index}
					/>
				))}
			</StyledProjectsItems>
		</Section>
	);
};
