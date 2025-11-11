import {Text} from "../../ui-kit/components/Text";
import {StyledFooterBlock} from "./styles";

/** Подвал */
export const Footer = () => {
    return (
        <StyledFooterBlock className="qa-footer">
            <Text
                color='var(--item-color)'
                variation="descriptionM"
                text='Непомнящих Александр &copy; 2025'
            />
        </StyledFooterBlock>
    )
}
