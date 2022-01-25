import { SidebarBlock, SidebarLink, SidebarList } from "./SidebarStyles";

const Sidebar = ({isDarkMode}) => {

    return (
        <SidebarBlock dark={isDarkMode}>
        <nav class="sidebar__menu">
            <SidebarList>
                <li>
                    <SidebarLink dark={isDarkMode} to="/aboutme">Обо мне</SidebarLink>
                </li>
                <li>
                    <SidebarLink dark={isDarkMode} to="/skills">Мои навыки</SidebarLink>
                </li>
                <li>
                    <SidebarLink dark={isDarkMode} to="work">Опыт работы</SidebarLink>
                </li>
                <li>
                    <SidebarLink dark={isDarkMode} to="/projects">Мои проекты</SidebarLink>
                </li>
                <li>
                    <SidebarLink dark={isDarkMode} to="/hobby">Увлечения</SidebarLink>  
                </li>
                <li>
                    <SidebarLink 
                        dark={isDarkMode}
                        to="/gallery"
                    >Галерея</SidebarLink>
                </li>
            </SidebarList>
        </nav>
    </SidebarBlock> 
    )
}

export default Sidebar;
