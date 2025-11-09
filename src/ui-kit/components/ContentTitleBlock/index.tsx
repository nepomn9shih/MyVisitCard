import {Box} from "../Box";
import {Text} from "../Text";
import {ContentTitleBlockProps} from "./types";

/** Блок с заголовком раздела */
export const ContentTitleBlock = ({
    text,
    color = 'var(--main-text-color)',
    bgColor = 'var(--secondary-color)',
    variation = 'titleL',
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
            boxShadow="5px 5px 10px rgba(0, 0, 0, 0.5)"
        >
            <Text
                variation={variation}
                text={text}
            />
        </Box>
    );
};