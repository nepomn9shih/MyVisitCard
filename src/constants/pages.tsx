import {Routes} from "../enums/routes";

import {About} from '../components/Body/About/About';
import {AboutMe} from '../components/Body/AboutMe/AboutMe';
import {Gallery} from '../components/Body/Gallery/Gallery';
import {Projects} from '../components/Body/Projects/Projects';
import {Skills} from '../components/Body/Skills/Skills';
import {Work} from '../components/Body/Work/Work';
import {Video} from '../components/Body/Video/Video';
import {PageProps} from "../ui-kit/components/PageBody/types";

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