import {SidebarLink} from "./styles";

export const SidebarItem = ({
    to,
    title
}: {
    to: string;
    title: string;
}) => {

    return (
        <li>
            <SidebarLink to={to}>
                {title}
            </SidebarLink>
        </li>
    );
};