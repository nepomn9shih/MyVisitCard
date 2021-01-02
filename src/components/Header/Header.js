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
      <a href="https://github.com/nepomn9shih" class="header__logo">
        <img src={ya} alt="" />
      </a>
      <nav class="header__menu">
        <ul class={isMenuOpen ? "header__list active" : "header__list"}>
          <li>
          <a href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763" class="header__link">
              HH
            </a>
          </li>
          <li>
          <a href="https://github.com/nepomn9shih" class="header__link">
              GitHub
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/alexander-nepomnyashchikh/" class="header__link">
              LinkedIn
            </a>
          </li>
          <li>
          <NavLink className="header__link" to="/about">
              О сайте
            </NavLink>
          </li>
          <li>
            <a href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763" class="header__link">
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
