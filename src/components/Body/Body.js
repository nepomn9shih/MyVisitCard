import { Redirect, Route, Switch } from 'react-router-dom'
import About from './About'
import AboutMe from './AboutMe'
import Gallery from './Gallery/Gallery'
import Hobby from './Hobby/Hobby'
import Projects from './Projects/Projects'
import Sidebar from './Sidebar'
import Skills from './Skills/Skills'
import Work from './Work/Work'

const Body = () => {
    return (
<main class="main">
            <Sidebar/>
            <section class="content">
                <Switch>
                <Redirect exact from="/" to="/aboutme"/>
                    <Route path="/aboutme" component={AboutMe}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/hobby" component={Hobby}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </section>
        </main>
    )
}

export default Body;