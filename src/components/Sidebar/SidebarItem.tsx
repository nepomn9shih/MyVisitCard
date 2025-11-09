import {StyledSidebarLink} from "./styles";

export const SidebarItem = ({
    to,
    title
}: {
    to: string;
    title: string;
}) => {

    return (
        <li className="qa-sidebar-item">
            <StyledSidebarLink to={to}>
                {title}
            </StyledSidebarLink>
        </li>
    );
};