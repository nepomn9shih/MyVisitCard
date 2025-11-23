import React from 'react';
import {createGlobalStyle} from 'styled-components';

import {ThemeNames} from '../../../enums/ThemeNames';

/** Светлая тема */
const LightTheme = createGlobalStyle`
    body {
        /* Основные цвета */
        --main-color: indigo;
        --secondary-color: darkorchid;
        --accent-color: goldenrod;
        --primary-bg-color: grey;
        --secondary-bg-color: white;
        --item-color: ivory;

        /* Цвет текста */
        --primary-text-color: white;
        --primary-text-hover-color: var(--accent-color);
        --primary-text-active-color: var(--main-color);
        --secondary-text-color: black;
        --secondary-text-hover-color: var(--accent-color);
        --secondary-text-active-color: var(--main-color);

        --opacity-value: 100%;
        --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        --box-shadow-hover: 5px 5px 10px rgba(0, 0, 0, 0.2);

         /* Компоненты */
        --page-bg-color: var(--primary-bg-color);

        --header-bg-color: var(--main-color);
        --header-text-color: var(--primary-text-color);
        --header-text-hover-color: var(--primary-text-hover-color);
        --header-text-active-color: var(--primary-text-active-color);

        --footer-bg-color: var(--main-color);

        --sidebar-bg-color: var(--secondary-color);
        --sidebar-text-color: var(--primary-text-color);
        --sidebar-text-hover-color: var(--primary-text-hover-color);
        --sidebar-text-active-color: var(--primary-text-active-color);

        --section-bg-color: var(--main-color);
        --section-title-bg-color: var(--secondary-color);

        --toggle-color: var(--secondary-color);
        --toggle-bg-color: var(--item-color);
        --toggle-text-color: var(--primary-text-color);
        --toggle-text-hover-color: var(--primary-text-hover-color);
    }
`;

/** Темная тема */
const DarkTheme = createGlobalStyle`
    body {
        /* Основные цвета */
        --main-color: #1f1029;
        --secondary-color: #3b1f4d;
        --accent-color: goldenrod;
        --primary-bg-color: #110916;
        --secondary-bg-color: #3b1f4d;
        --item-color: #85858F;

        /* Цвет текста */
        --primary-text-color: #c0bac8;
        --primary-text-hover-color: var(--accent-color);
        --primary-text-active-color: var(--secondary-text-color);
        --secondary-text-color: #f8f8f8;
        --secondary-text-hover-color: var(--accent-color);
        --secondary-text-active-color: var(--primary-text-color);

        --opacity-value: 90%;
        --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        --box-shadow-hover: 5px 5px 10px rgba(0, 0, 0, 0.2);

        /* Компоненты */
        --page-bg-color: var(--primary-bg-color);

        --header-bg-color: var(--main-color);
        --header-text-color: var(--primary-text-color);
        --header-text-hover-color: var(--primary-text-hover-color);
        --header-text-active-color: var(--primary-text-active-color);

        --footer-bg-color: var(--main-color);

        --sidebar-bg-color: var(--main-color);
        --sidebar-text-color: var(--primary-text-color);
        --sidebar-text-hover-color: var(--primary-text-hover-color);
        --sidebar-text-active-color: var(--primary-text-active-color);

        --section-bg-color: var(--main-color);
        --section-title-bg-color: var(--secondary-color);

        --toggle-color: var(--secondary-color);
        --toggle-bg-color: var(--item-color);
        --toggle-text-color: var(--primary-text-color);
        --toggle-text-hover-color: var(--primary-text-hover-color);
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