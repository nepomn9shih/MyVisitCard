import {Box} from "../Box";
import {StyledLoader} from "./styles";
import {LoaderProps} from "./types";

export const Loader = ({
    size = '60px',
    mainColor = 'var(--main-color)',
    secondaryColor = 'var(--secondary-bg-color)'
}: LoaderProps) => {
    return (
        <Box
            width='100%'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <StyledLoader
                className="qa-loader"
                size={size}
                $mainColor={mainColor}
                $secondaryColor={secondaryColor}
            />
        </Box>
    );
};
