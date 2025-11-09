import {Redirect, Route, Switch} from 'react-router-dom';

import {Routes} from '../../enums/routes';
import {About} from './About/About';
import {AboutMe} from './AboutMe/AboutMe';
import {Gallery} from './Gallery/Gallery';
import {Projects} from './Projects/Projects';
import {Sidebar} from '../Sidebar/Sidebar';
import {Skills} from './Skills/Skills';
import {Work} from './Work/Work';
import {Video} from './Video/Video';
import {StyledBodyContent, StyledBodyMain} from './styles';

/** Основной блок */
export const Body = () => {
    return (
        <StyledBodyMain className="qa-body">
            <Sidebar />
            <StyledBodyContent className="qa-body-content">
                <Switch>
                    <Redirect exact from="/" to={Routes.ABOUT_ME}/>
                    <Route path={Routes.ABOUT_ME} render={() => <AboutMe />}/>
                    <Route path={Routes.SKILLS} render={() => <Skills />}/>
                    <Route path={Routes.WORK} render={() => <Work />}/>
                    <Route path={Routes.PROJECTS} render={() => <Projects />}/>
                    <Route path={Routes.GALLERY} render={() => <Gallery />}/>
                    <Route path={Routes.VIDEO} render={() => <Video />}/>
                    <Route path={Routes.ABOUT} render={() => <About />}/>
                </Switch>
            </StyledBodyContent>
        </StyledBodyMain>
    )
}
