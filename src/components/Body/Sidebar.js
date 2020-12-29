import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside class="sidebar">
        <nav class="sidebar__menu">
            <ul class="sidebar__list">
                <li>
                    <NavLink 
                        className="sidebar__link" 
                        to="/gallery"
                    >Галерея</NavLink>
                </li>
                <li>
                    <NavLink className="sidebar__link" to="/products">Продукты</NavLink>
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
    )
}

export default Sidebar;
