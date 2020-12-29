import './style.css';
import ya from './images/ya.png'
import cart from './images/cart.png'
import tv1 from './images/tv1.png'
import tv2 from './images/tv2.png'
import tv3 from './images/tv3.png'
import tv4 from './images/tv4.png'
import tv5 from './images/tv5.png'
import tv6 from './images/tv6.png'

function App() {
  return (
    <>
      <header class="header">
            <a href="#1" class="header__logo"><img src={ya} alt=""/></a>
            <nav class="header__menu">
                <ul class="header__list">
                    <li>
                        <a href="#1" class="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#1" class="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#1" class="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#1" class="header__link"><img src={cart} alt=""/></a>
                    </li>
                </ul>
                <div class="header__burger">
                    <span></span>
                </div>
            </nav>
        </header>
        <main class="main">
            <aside class="sidebar">
                <nav class="sidebar__menu">
                    <ul class="sidebar__list">
                        <li>
                            <a href="#1" class="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#1" class="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#1" class="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#1" class="sidebar__link">Пункт меню</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section class="content">
                <h1 class="content__title">Заголовок контента</h1>
                <section class="content__gallery gallery">
                    <h2 class="gallery__title">Галерея</h2>
                    <div class="gallery__items">
                        <div class="gallery__item gallery__item_big">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item gallery__item_big">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                        <div class="gallery__item">
                            <img src={ya} alt=""/>
                        </div>
                    </div>
                </section>
                <section class="content__products products">
                    <h2 class="products__title">Продукты</h2>
                    <div class="products__items">
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv1} alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv2} alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv3}alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv4} alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv5} alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                        <div class="products__item">
                            <a href="#1" class="products__image">
                                <img src={tv6} alt=""/>
                            </a>
                            <a href="#1" class="products__name">Товар</a>
                            <a href="#1" class="products__button">Купить</a>
                        </div>
                    </div>
                </section>

            </section>
        </main>
        <footer class="footer">
            <div class="footer__copy">Непомнящих Александр &copy; 2020</div>
            <div class="footer__menu"><a href="#1">меню</a></div>
        </footer>
    </>
  );
}

export default App;
