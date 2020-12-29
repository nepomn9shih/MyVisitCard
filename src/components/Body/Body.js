import Gallery from './Gallery/Gallery'
import Products from './Products/Products'
import Sidebar from './Sidebar'

const Body = () => {
    return (
<main class="main">
            <Sidebar/>
            <section class="content">
                <h1 class="content__title">Заголовок контента</h1>
                <Gallery/>
                <Products/>
            </section>
        </main>
    )
}

export default Body;