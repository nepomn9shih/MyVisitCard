import type {TextVariations} from "../Text/types";

export type PageHeaderProps = {
    handlerToggle: () => void;
    links: PageHeaderLinkProps[];
    logo: string;
    logoUrl: string;
    title: string;
    textVariation?: TextVariations;
    textColor?: React.CSSProperties['color'];
    textHoverColor?: React.CSSProperties['color'];
    textActiveColor?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
    activeBgColor?: React.CSSProperties['backgroundColor'];
    logoTextVariation?: TextVariations;
};

export type PageHeaderLinkProps = {
    url: string;
    text: string;
    textVariation?: TextVariations;
    isNavLink?: boolean;
    textColor?: React.CSSProperties['color'];
    textHoverColor?: React.CSSProperties['color'];
    textActiveColor?: React.CSSProperties['color'];
    activeBgColor?: React.CSSProperties['backgroundColor'];
};
