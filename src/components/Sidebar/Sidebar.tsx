import {SIDEBAR_ITEMS_DATA} from "./constants";
import {SidebarItem} from "./SidebarItem";
import {SidebarBlock, SidebarList} from "./styles";

export const Sidebar = ({isDarkMode}: {isDarkMode: boolean}) => {
    return (
        <SidebarBlock dark={isDarkMode}>
            <nav className="sidebar__menu">
                <SidebarList>
                    {SIDEBAR_ITEMS_DATA.map(({to, title}, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                isDarkMode={isDarkMode}
                                to={to}
                                title={title}
                            />
                        );
                    })}
                </SidebarList>
            </nav>
        </SidebarBlock>
    )
}
