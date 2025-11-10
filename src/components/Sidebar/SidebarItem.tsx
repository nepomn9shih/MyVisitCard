import {Text} from "../../ui-kit/components/Text";
import {StyledSidebarLink} from "./styles";

export const SidebarItem = ({
    to,
    title
}: {
    to: string;
    title: string;
}) => {

    return (
        <StyledSidebarLink
            className="qa-sidebar-item"
            to={to}
        >
            <Text variation='descriptionXL' text={title} />
        </StyledSidebarLink>
    );
};