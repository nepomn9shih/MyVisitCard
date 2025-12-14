import {Badge} from "../../ui-kit/components/Badge";
import {Box} from "../../ui-kit/components/Box";
import {Section} from "../../ui-kit/components/Section";
import {getSearchUrl} from "../../ui-kit/utils/getSearchUrl";
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
						<Badge
						key={index}
						url={getSearchUrl(skill)}
						text={skill}
						/>
					);
				})}
			</Box>
		</Section>
	);
};
