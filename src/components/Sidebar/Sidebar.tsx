import {Box} from "../../ui-kit/components/Box";
import {SIDEBAR_ITEMS_DATA} from "./constants";
import {SidebarItem} from "./SidebarItem";
import {StyledSidebarBlock} from "./styles";

/** Меню страницы */
export const Sidebar = () => {
    return (
        <StyledSidebarBlock className="qa-sidebar">
            <nav className="sidebar__menu">
                <Box
                    display='flex'
                    flexDirection='column'
                    gap='8px'
                >
                    {SIDEBAR_ITEMS_DATA.map(({to, title}, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                to={to}
                                title={title}
                            />
                        );
                    })}
                </Box>
            </nav>
        </StyledSidebarBlock>
    )
}
