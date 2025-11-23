import {TextVariations} from "../Text/types";

export type PageFooterProps = {
    text: string;
    textVariation?: TextVariations;
    textColor?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
};
