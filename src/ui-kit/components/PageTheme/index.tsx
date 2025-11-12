import React from 'react';
import {createGlobalStyle} from 'styled-components';

import {ThemeNames} from '../../../enums/ThemeNames';

/** Светлая тема */
const LightTheme = createGlobalStyle`
    body {
        --main-color: indigo;
        --secondary-color: darkorchid;
        --accent-color: goldenrod;
        --primary-bg-color: grey;
        --secondary-bg-color: white;
        --item-color: ivory;

        --page-bg-color: grey;
        --header-bg-color: var(--main-color);
        --footer-bg-color: var(--main-color);
        --sidebar-bg-color: var(--secondary-color);
        --section-bg-color: var(--main-color);
        --section-title-bg-color: var(--secondary-color);
        --toggle-color: var(--secondary-color);
        --toggle-bg-color: var(--secondary-bg-color);

        --primary-text-color: white;
        --secondary-text-color: black;

        --opacity-value: 100%;
        --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        --box-shadow-hover: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

/** Темная тема */
const DarkTheme = createGlobalStyle`
    body {
        --main-color: #191A1E;
        --secondary-color: #82625A;
        --accent-color: goldenrod;
        --primary-bg-color: #61353B;
        --secondary-bg-color: ivory;
        --item-color: #85858F;

        --page-bg-color: #61353B;
        --header-bg-color: var(--main-color);
        --footer-bg-color: var(--main-color);
        --sidebar-bg-color: var(--secondary-color);
        --section-bg-color: var(--main-color);
        --section-title-bg-color: var(--secondary-color);
        --toggle-color: var(--secondary-color);
        --toggle-bg-color: var(--secondary-bg-color);

        --primary-text-color: ivory;
        --secondary-text-color: black;

        --opacity-value: 90%;
        --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        --box-shadow-hover: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

const THEMES: Record<ThemeNames, React.NamedExoticComponent> = {
    [ThemeNames.LIGHT]: LightTheme,
    [ThemeNames.DARK]: DarkTheme
};

/** Тема страницы */
export const PageTheme = ({chosenTheme}: {chosenTheme: ThemeNames}) => {
    const Theme = THEMES[chosenTheme];

    return <Theme />;
};