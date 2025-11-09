import {SIDEBAR_ITEMS_DATA} from "./constants";
import {SidebarItem} from "./SidebarItem";
import {StyledSidebarBlock, StyledSidebarList} from "./styles";

/** Меню страницы */
export const Sidebar = () => {
    return (
        <StyledSidebarBlock className="qa-sidebar">
            <nav className="sidebar__menu">
                <StyledSidebarList>
                    {SIDEBAR_ITEMS_DATA.map(({to, title}, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                to={to}
                                title={title}
                            />
                        );
                    })}
                </StyledSidebarList>
            </nav>
        </StyledSidebarBlock>
    )
}
