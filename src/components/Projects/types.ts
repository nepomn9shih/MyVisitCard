export type ProjectData = {
	img: string; 
	name: string;
	description: string;
	technologies: string[];
	link: string;
};

export type ProjectItemProps = {
	project: ProjectData;
	index: number
};
