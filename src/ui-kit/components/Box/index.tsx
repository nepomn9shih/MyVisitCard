import {omitUndefinedFields} from "../../utils/omitUndefinedFields";
import {BoxProps} from "./types";

/** Блок-обертка */
export const Box = ({
    color,
    bgColor,
    m,
    mt,
    mb,
    ml,
    mr,
    p,
    pt,
    pb,
    pl,
    pr,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    borderRadius,
    boxShadow,
    className,
    children
}: BoxProps) => {
    const styles = omitUndefinedFields({
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
        borderRadius,
        boxShadow
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