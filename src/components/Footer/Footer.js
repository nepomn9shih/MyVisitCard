import { FooterBlock } from "./FooterStyles";

const Footer = ({isDarkMode}) => {
    
    return (
        <FooterBlock dark={isDarkMode}>
            <div>Непомнящих Александр &copy; 2021</div>
        </FooterBlock>
    )
}

export default Footer;