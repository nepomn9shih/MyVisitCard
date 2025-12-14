import {Badge} from "../../ui-kit/components/Badge";
import {Box} from "../../ui-kit/components/Box";
import {Text} from "../../ui-kit/components/Text";
import {getSearchUrl} from "../../ui-kit/utils/getSearchUrl";
import {
  StyledProjectsItem,
  StyledProjectsImage,
  StyledProjectsName,
  StyledProjectsButton,
  StyledProjectsImageLink
} from "./styles";
import type {ProjectItemProps} from "./types";

/** Компонент отдельного проекта */
export const ProjectItem = ({project, index}: ProjectItemProps) => (
	<StyledProjectsItem
    	className={`qa-projects-block-item-${index}`}
	>
		<StyledProjectsImageLink
			href={project.link}
			target="_blank"
			rel="noreferrer"
			className='qa-projects-block-item-image'
		>
			<StyledProjectsImage src={project.img} alt={project.name} />
		</StyledProjectsImageLink>
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
		{project.technologies.map((tech) => (
			<Badge
				key={tech}
				url={getSearchUrl(tech)}
				text={tech}
			/>
		))}
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