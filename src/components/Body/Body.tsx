import { Redirect, Route, Switch } from 'react-router-dom'
import {About} from './About/About'
import {AboutMe} from './AboutMe/AboutMe'
import {Gallery} from './Gallery/Gallery'
import {Hobby} from './Hobby/Hobby'
import {Projects} from './Projects/Projects'
import {Sidebar} from '../Sidebar/Sidebar'
import {Skills} from './Skills/Skills'
import {Work} from './Work/Work'
import { BodyContent, BodyMain } from './styles'

export const Body = ({isDarkMode}: {isDarkMode: boolean}) => {
    return (
        <BodyMain>
            <Sidebar isDarkMode={isDarkMode}/>
            <BodyContent>
                <Switch>
                <Redirect exact from="/" to="/aboutme"/>
                    <Route path="/aboutme" render={() => {return <AboutMe isDarkMode={isDarkMode}/>}}/>
                    <Route path="/skills" render={() => {return <Skills isDarkMode={isDarkMode}/>}}/>
                    <Route path="/work" render={() => {return <Work isDarkMode={isDarkMode}/>}}/>
                    <Route path="/projects" render={() => {return <Projects isDarkMode={isDarkMode}/>}}/>
                    <Route path="/hobby" render={() => {return <Hobby isDarkMode={isDarkMode}/>}}/>
                    <Route path="/gallery" render={() => {return <Gallery isDarkMode={isDarkMode}/>}}/>
                    <Route path="/about" render={() => {return <About isDarkMode={isDarkMode}/>}}/>
                </Switch>
            </BodyContent>
        </BodyMain>
    )
}
