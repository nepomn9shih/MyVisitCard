import {SidebarItem} from "./SidebarItem";
import {StyledSidebarBlock} from "./styles";
import {SidebarProps} from "./types";

/** Меню страницы */
export const Sidebar = ({
    items,
    color = 'var(--sidebar-text-color)',
    bgColor = 'var(--sidebar-bg-color)',
    hoverColor = 'var(--sidebar-text-hover-color)',
    activeColor = 'var(--sidebar-text-active-color)',
    activeBgColor ='var(--sidebar-item-active-color)'
}: SidebarProps) => {
    return (
        <StyledSidebarBlock
            className="qa-sidebar"
            $bgColor={bgColor}
        >
            {items.map(({to, title}, index) => {
                return (
                    <SidebarItem
                        key={index}
                        to={to}
                        title={title}
                        color={color}
                        hoverColor={hoverColor}
                        activeColor={activeColor}
                        activeBgColor={activeBgColor}
                    />
                );
            })}
        </StyledSidebarBlock>
    );
}
