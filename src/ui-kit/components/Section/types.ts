import {ReactNode} from "react";

export type SectionProps = {
    text: string;
    className?: string;
    titleTextColor?: React.CSSProperties['color'];
    titleBgColor?: React.CSSProperties['backgroundColor'];
    bgColor?: React.CSSProperties['backgroundColor'];
    children: ReactNode
}