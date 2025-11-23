import {Text} from "../Text";
import {StyledBadge} from "./styled";
import {BadgeProps} from "./types";

/** Бейдж */
export const Badge = ({
    url,
    text,
    color = 'var(--main-color)',
    bgColor = 'var(--item-color)',
    hoverColor = 'var(--main-color)',
    activeColor = 'var(--main-color)',
    activeBgColor = 'var(--accent-color)',
    textVariation = 'descriptionL'
}: BadgeProps) => {
    return (
        <StyledBadge
            className='qa-badge'
            href={url}
            target="_blank"
            rel="noreferrer"
            $color={color}
            $bgColor={bgColor}
            $hoverColor={hoverColor}
            $activeColor={activeColor}
            $activeBgColor={activeBgColor}
        >
            <Text variation={textVariation} text={text} />
        </StyledBadge>
    );
}