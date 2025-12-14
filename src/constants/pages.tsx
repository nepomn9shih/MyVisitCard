import {Routes} from "../enums/routes";

import {About} from '../components/About';
import {AboutMe} from '../components/AboutMe';
import {Gallery} from '../components/Gallery';
import {Projects} from '../components/Projects';
import {Skills} from '../components/Skills';
import {Work} from '../components/Work';
import {Video} from '../components/Video';

import type {PageProps} from "../ui-kit/components/PageBody/types";

/** Набор данных для страниц сайта */
export const getPages = (): PageProps[] => [
    {
        path: Routes.ABOUT_ME,
        component: () => <AboutMe />
    },
    {
        path: Routes.SKILLS,
        component: () => <Skills />
    },
    {
        path: Routes.WORK,
        component: () => <Work />
    },
    {
        path: Routes.PROJECTS,
        component: () => <Projects />
    },
    {
        path: Routes.GALLERY,
        component: () => <Gallery />
    },
    {
        path: Routes.VIDEO,
        component: () => <Video />
    },
    {
        path: Routes.ABOUT,
        component: () => <About />
    }
];