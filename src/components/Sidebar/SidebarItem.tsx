import {SidebarLink} from "./styles";

export const SidebarItem = ({
    isDarkMode,
    to,
    title
}: {
    isDarkMode: boolean;
    to: string;
    title: string;
}) => {

    return (
        <li>
            <SidebarLink
                dark={isDarkMode}
                to={to}
            >
                {title}
            </SidebarLink>
        </li>
    );
};