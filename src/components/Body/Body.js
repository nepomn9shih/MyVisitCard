import { Route, Switch } from 'react-router-dom'
import About from './About'
import Gallery from './Gallery/Gallery'
import Products from './Products/Products'
import Projects from './Projects/Projects'
import Sidebar from './Sidebar'

const Body = () => {
    return (
<main class="main">
            <Sidebar/>
            <section class="content">
                <Switch>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </section>
        </main>
    )
}

export default Body;