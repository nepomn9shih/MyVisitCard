import React from 'react';
import {createGlobalStyle} from 'styled-components';

import {ThemeNames} from '../../enums/ThemeNames';

/** Светлая тема */
const LightTheme = createGlobalStyle`
    body {
        --main-color: indigo;
        --secondary-color: darkorchid;
        --active-color: goldenrod;
        --background-color: grey;
        --secondary-background-color: white;
        --item-color: ivory;
        --main-text-color: white;
        --description-text-color: black;
        --opacity-value: 100%;
    }
`;

/** Темная тема */
const DarkTheme = createGlobalStyle`
    body {
        --main-color: #191A1E;
        --secondary-color: #82625A;
        --active-color: goldenrod;
        --background-color: #61353B;
        --secondary-background-color: ivory;
        --item-color: #85858F;
        --main-text-color: ivory;
        --description-text-color: black;
        --opacity-value: 80%;
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