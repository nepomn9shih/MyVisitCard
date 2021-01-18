import { NavLink } from "react-router-dom";
import { SidebarBlock } from "./SidebarStyles";

const Sidebar = ({isDarkMode}) => {

    return (
        <SidebarBlock dark={isDarkMode}>
        <nav class="sidebar__menu">
            <ul class="sidebar__list">
                <li>
                 <NavLink className="sidebar__link" to="/aboutme">Обо мне</NavLink>
                </li>
                <li>
                    <NavLink className="sidebar__link" to="/skills">Мои навыки</NavLink>
                </li>
                <li>
                <NavLink className="sidebar__link" to="work">Опыт работы</NavLink>
                </li>
                <li>
                    <NavLink className="sidebar__link" to="/projects">Мои проекты</NavLink>
                </li>
                <li>
                    <NavLink className="sidebar__link" to="/hobby">Увлечения</NavLink>  
                </li>
                <li>
                    <NavLink 
                        className="sidebar__link" 
                        to="/gallery"
                    >Галерея</NavLink>
                </li>
            </ul>
        </nav>
    </SidebarBlock> 
    )
}

export default Sidebar;
