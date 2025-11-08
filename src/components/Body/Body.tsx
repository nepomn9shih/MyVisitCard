import {Redirect, Route, Switch} from 'react-router-dom'
import {About} from './About/About'
import {AboutMe} from './AboutMe/AboutMe'
import {Gallery} from './Gallery/Gallery'
import {Projects} from './Projects/Projects'
import {Sidebar} from '../Sidebar/Sidebar'
import {Skills} from './Skills/Skills'
import {Work} from './Work/Work'
import {BodyContent, BodyMain} from './styles'
import {Routes} from '../../enums/routes'
import {Video} from './Video/Video'

export const Body = () => {
    return (
        <BodyMain>
            <Sidebar />
            <BodyContent>
                <Switch>
                <Redirect exact from="/" to={Routes.ABOUT_ME}/>
                    <Route path={Routes.ABOUT_ME} render={() => {return <AboutMe />}}/>
                    <Route path={Routes.SKILLS} render={() => {return <Skills />}}/>
                    <Route path={Routes.WORK} render={() => {return <Work />}}/>
                    <Route path={Routes.PROJECTS} render={() => {return <Projects />}}/>
                    <Route path={Routes.GALLERY} render={() => {return <Gallery />}}/>
                    <Route path={Routes.VIDEO} render={() => {return <Video />}}/>
                    <Route path={Routes.ABOUT} render={() => {return <About />}}/>
                </Switch>
            </BodyContent>
        </BodyMain>
    )
}
