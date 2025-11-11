import {Box} from "../Box";
import {SectionTitle} from "../SectionTitle";
import {SectionProps} from "./types";

/** Раздел с заголовком */
export const Section = ({
    text,
    className = "qa-section",
    bgColor = 'var(--section-bg-color)',
    titleTextColor = 'var(--primary-text-color)',
    titleBgColor = 'var(--section-title-bg-color)',
    children
}: SectionProps) => {
    return (
        <section className={className}>
            <Box
                bgColor={bgColor}
                borderRadius='10px'
                p='10px 10px 20px 10px'
                boxShadow='var(--box-shadow)'
            >
                <SectionTitle
                    text={text}
                    color={titleTextColor}
                    bgColor={titleBgColor}
                />
                {children}
            </Box>
        </section>
    );
};