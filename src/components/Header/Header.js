import ya from "../../images/ya.png";
import cart from "../../images/cart.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header class="header">
      <a href="#1" class="header__logo">
        <img src={ya} alt="" />
      </a>
      <nav class="header__menu">
        <ul class={isMenuOpen ? "header__list active" : "header__list"}>
          <li>
            <NavLink className="header__link" to="/gallery">
              Галерея
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/products">
              Продукты
            </NavLink>
          </li>
          <li>
            <a href="#1" class="header__link">
              Пункт меню
            </a>
          </li>
          <li>
            <a href="#1" class="header__link">
              <img src={cart} alt="" />
            </a>
          </li>
        </ul>
        <div
          onClick={handleClick}
          class={isMenuOpen ? "header__burger active" : "header__burger"}
        >
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
