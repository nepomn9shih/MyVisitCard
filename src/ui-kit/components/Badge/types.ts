import {TextVariations} from "../Text/types";

export type BadgeProps = {
    url?: string;
    text: string;
    color?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
    hoverColor?: React.CSSProperties['color'];
    activeColor?: React.CSSProperties['color'];
    activeBgColor?: React.CSSProperties['backgroundColor'];
    textVariation?: TextVariations
};