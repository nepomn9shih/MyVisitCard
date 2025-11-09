import {ReactNode} from "react";

export type BoxProps = {
    color?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
    m?: React.CSSProperties['margin'];
    mt?: React.CSSProperties['marginTop'];
    mb?: React.CSSProperties['marginBottom'];
    ml?: React.CSSProperties['marginLeft'];
    mr?: React.CSSProperties['marginRight'];
    p?: React.CSSProperties['padding'];
    pt?: React.CSSProperties['paddingTop'];
    pb?: React.CSSProperties['paddingBottom'];
    pl?: React.CSSProperties['paddingLeft'];
    pr?: React.CSSProperties['paddingRight'];
    display?: React.CSSProperties['display'];
    flexDirection?: React.CSSProperties['flexDirection'];
    alignItems?: React.CSSProperties['alignItems'];
    justifyContent?: React.CSSProperties['justifyContent'];
    borderRadius?: React.CSSProperties['borderRadius'];
    boxShadow?: React.CSSProperties['boxShadow'];
    className?: string;
    children: ReactNode;
}