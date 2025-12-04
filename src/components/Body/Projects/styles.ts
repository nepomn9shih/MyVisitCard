import styled from "styled-components";

export const StyledProjectsItems = styled.div`
	display: grid;
	column-gap: 20px;
	row-gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const StyledProjectsItem = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template: auto auto auto 1fr minmax(40px, auto) / 1fr;
`;

export const StyledProjectsImageLink = styled.a`
	position: relative;
	padding: 0 0 90% 0;
`;

export const StyledProjectsImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: var(--item-color);
	padding: 15px;
	transition: padding 0.5s ease;

	&:hover {
		padding: 10px;
	}
`;

export const StyledProjectsName = styled.a`
	color: var(--primary-text-color);
	line-height: 30px;
	margin: 0;
	background-color: var(--primary-bg-color);
	padding: 15px;
	text-align: center;
	transition: color 0.3s ease;

	&:hover {
		color: var(--primary-text-hover-color);
	}
`;

export const StyledProjectsButton = styled.a`
	color: var(--primary-text-color);
	background-color: var(--secondary-color);
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	padding: 15px;
	justify-self: end;
	box-shadow: var(--box-shadow);
	transition: box-shadow 0.3s ease, color 0.3s ease;

	&:hover {
    	box-shadow: var(--box-shadow-hover);
    	color: var(--primary-text-color);
	}
`;