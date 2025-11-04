import {FooterBlock} from "./styles";

export const Footer = ({isDarkMode}: {isDarkMode: boolean}) => {
    
    return (
        <FooterBlock dark={isDarkMode}>
            <div>Непомнящих Александр &copy; 2025</div>
        </FooterBlock>
    )
}
