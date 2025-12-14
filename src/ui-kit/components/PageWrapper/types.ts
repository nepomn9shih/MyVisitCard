import type {ReactNode} from "react";

export type PageWrapperProps = {
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
    bgColor?: React.CSSProperties['backgroundColor'];
};