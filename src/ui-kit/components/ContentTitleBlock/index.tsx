import {Box} from "../Box";
import {Text} from "../Text";
import {ContentTitleBlockProps} from "./types";

/** Блок с заголовком раздела */
export const ContentTitleBlock = ({
    text,
    color = 'var(--main-text-color)',
    bgColor = 'var(--secondary-color)',
    variation = 'titleXL',
    mb = '16px',
    p = '20px'
}: ContentTitleBlockProps) => {
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