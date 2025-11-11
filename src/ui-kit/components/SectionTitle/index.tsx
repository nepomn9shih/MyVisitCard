import {Box} from "../Box";
import {Text} from "../Text";
import {SectionTitleProps} from "./types";

/** Заголовок раздела */
export const SectionTitle = ({
    text,
    color = 'var(--primary-text-color)',
    bgColor = 'var(--section-title-bg-color)',
    variation = 'titleXL',
    mb = '16px',
    p = '20px'
}: SectionTitleProps) => {
    return (
        <Box
            className="qa-content-title-block"
            color={color}
            bgColor={bgColor}
            mb={mb}
            p={p}
            borderRadius='10px'
            boxShadow="var(--box-shadow)"
        >
            <Text
                variation={variation}
                text={text}
            />
        </Box>
    );
};