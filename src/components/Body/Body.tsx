import {Redirect, Route, Switch} from 'react-router-dom';

import {Routes} from '../../enums/routes';
import {PageSidebar} from '../PageSidebar';
import {About} from './About/About';
import {AboutMe} from './AboutMe/AboutMe';
import {Gallery} from './Gallery/Gallery';
import {Projects} from './Projects/Projects';
import {Skills} from './Skills/Skills';
import {Work} from './Work/Work';
import {Video} from './Video/Video';
import {StyledBodyContent, StyledBodyMain} from './styles';
import {PageProps} from './types';

const PAGES: PageProps[] = [
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

/** Основной блок */
export const Body = () => {
    return (
        <StyledBodyMain className="qa-body">
            <PageSidebar />
            <StyledBodyContent className="qa-body-content">
                <Switch>
                    <Redirect exact from="/" to={PAGES[0].path}/>
                    {PAGES.map(({path, component}, index) => {
                        return (
                            <Route
                                key={index}
                                path={path}
                                render={component}
                            />
                        );
                    })}
                </Switch>
            </StyledBodyContent>
        </StyledBodyMain>
    );
};
