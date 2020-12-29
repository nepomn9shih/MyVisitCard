import ya from '../../images/ya.png'
import cart from '../../images/cart.png'

const Header = () => {
    return (
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
    )
}

export default Header;