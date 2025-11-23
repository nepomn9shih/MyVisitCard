import {Text} from "../Text";
import {StyledSidebarLink} from "./styles";
import {SidebarItemProps} from "./types";

export const SidebarItem = ({
    to,
    title,
    color,
    hoverColor,
    activeColor,
    activeBgColor
}: SidebarItemProps) => {
    return (
        <StyledSidebarLink
            className="qa-sidebar-item"
            to={to}
            $color={color}
            $hoverColor={hoverColor}
            $activeColor={activeColor}
            $activeBgColor={activeBgColor}
        >
            <Text variation='descriptionXL' text={title} />
        </StyledSidebarLink>
    );
};