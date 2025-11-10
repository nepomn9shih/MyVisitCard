import {omitUndefinedFields} from "../../utils/omitUndefinedFields";
import {BoxProps} from "./types";

/** Блок-обертка */
export const Box = ({
    height, width,
    color, bgColor,
    m, mt, mb, ml, mr,
    p, pt, pb, pl, pr,
    display, flexDirection, flexWrap,
    gap, alignItems, justifyContent,
    border, borderRadius,
    boxShadow,
    className,
    children
}: BoxProps) => {
    const styles = omitUndefinedFields({
        height,
        width,
        color,
        backgroundColor: bgColor,
        margin: m,
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        padding: p,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        display,
        flexDirection,
        alignItems,
        justifyContent,
        gap,
        flexWrap,
        border,
        borderRadius,
        boxShadow,
        boxSizing: 'border-box'
    });

    return (
        <div
            style={styles}
            className={className}
        >
            {children}
        </div>
    );
};