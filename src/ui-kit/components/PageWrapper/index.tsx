import {
    StyledBodyWrapper,
    StyledFooterWrapper,
    StyledHeaderWrapper,
    StyledPageWrapper
} from "./styles";
import type {PageWrapperProps} from "./types";

/** Обертка всей страницы */
export const PageWrapper = ({
    bgColor = 'var(--page-bg-color)',
    header,
    body,
    footer
}: PageWrapperProps) => {
    return (
        <StyledPageWrapper $bgColor={bgColor}>
            <StyledHeaderWrapper>
                {header}
            </StyledHeaderWrapper>
            <StyledBodyWrapper>
                {body}
            </StyledBodyWrapper>
            <StyledFooterWrapper>
                {footer}
            </StyledFooterWrapper>
        </StyledPageWrapper>
    );
};