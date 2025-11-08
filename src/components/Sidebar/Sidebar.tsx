import {SIDEBAR_ITEMS_DATA} from "./constants";
import {SidebarItem} from "./SidebarItem";
import {SidebarBlock, SidebarList} from "./styles";

export const Sidebar = () => {
    return (
        <SidebarBlock>
            <nav className="sidebar__menu">
                <SidebarList>
                    {SIDEBAR_ITEMS_DATA.map(({to, title}, index) => {
                        return (
                            <SidebarItem
                                key={index}
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
