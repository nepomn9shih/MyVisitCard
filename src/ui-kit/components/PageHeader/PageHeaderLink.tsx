import {NavLink} from "react-router-dom";
import {Text} from "../Text";
import {StyledHeaderLink} from "./styles";
import {PageHeaderLinkProps} from "./types";

/** Ссылка в шапке */
export const PageHeaderLink = ({
    url,
    text,
    textColor = 'var(--header-text-color)',
    textHoverColor = 'var(--header-text-hover-color)',
    textActiveColor = 'var(--header-text-active-color)',
    activeBgColor = 'var(--secondary-bg-color)',
    textVariation = 'descriptionXL',
    isNavLink = false
}: PageHeaderLinkProps) => {
    const aProps = {
        href: url,
        target: "_blank",
        rel: "noreferrer"
    };

    const navLinkProps = {
        to: url,
        as: NavLink
    };

    const props = isNavLink ? navLinkProps : aProps;

    return (
        <StyledHeaderLink
            $textColor={textColor}
            $textHoverColor={textHoverColor}
            $textActiveColor={textActiveColor}
            $activeBgColor={activeBgColor}
            {...props}
        >
            <Text
                variation={textVariation}
                text={text}
            />
        </StyledHeaderLink>
    );
};