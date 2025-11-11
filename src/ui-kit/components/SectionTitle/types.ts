import {TextVariations} from "../Text/types";

export type SectionTitleProps = {
    text: string;
    color?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
    variation?: TextVariations;
    mb?: React.CSSProperties['marginBottom'];
    p?: React.CSSProperties['padding'];
}