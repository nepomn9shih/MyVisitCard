import {Text} from "../Text";
import {StyledFooterBlock} from "./styles";
import type {PageFooterProps} from "./types";

/** Подвал страницы */
export const PageFooter = ({
    text,
    textVariation = 'descriptionM',
    textColor = 'var(--footer-text-color)',
    bgColor = 'var(--footer-bg-color)'
}: PageFooterProps) => {
    return (
        <StyledFooterBlock
            className="qa-footer"
            $bgColor={bgColor}
        >
            <Text
                color={textColor}
                variation={textVariation}
                text={text}
            />
        </StyledFooterBlock>
    )
}
