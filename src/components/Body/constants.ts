import {Routes} from "../../enums/routes";
import {SidebarItem} from "../../ui-kit/components/Sidebar/types";

import {About} from './About/About';
import {AboutMe} from './AboutMe/AboutMe';
import {Gallery} from './Gallery/Gallery';
import {Projects} from './Projects/Projects';
import {Skills} from './Skills/Skills';
import {Work} from './Work/Work';
import {Video} from './Video/Video';
import {PageProps} from './types';

/** Набор данных для страниц сайта */
export const PAGES: PageProps[] = [
    {
        path: Routes.ABOUT_ME,
        component: AboutMe
    },
    {
        path: Routes.SKILLS,
        component: Skills
    },
    {
        path: Routes.WORK,
        component: Work
    },
    {
        path: Routes.PROJECTS,
        component: Projects
    },
    {
        path: Routes.GALLERY,
        component: Gallery
    },
    {
        path: Routes.VIDEO,
        component: Video
    },
    {
        path: Routes.ABOUT,
        component: About
    }
];

/** Набор данных для кнопок сайдбара */
export const SIDEBAR_ITEMS_DATA: SidebarItem[] = [
    {
        to: Routes.ABOUT_ME,
        title: "Обо мне"
    },
    {
        to: Routes.SKILLS,
        title: "Мои навыки"
    },
    {
        to: Routes.WORK,
        title: "Опыт работы"
    },
    {
        to: Routes.PROJECTS,
        title: "Мои проекты"
    },
    {
        to: Routes.GALLERY,
        title: "Галерея"
    },
    {
        to: Routes.VIDEO,
        title: "Видео"
    }
];