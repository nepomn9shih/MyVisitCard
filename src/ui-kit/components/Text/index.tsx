import xss from "xss";

import {TEXT_STYLES} from "./constants";
import {TextProps} from "./types";

/** Обертка над текстом */
export const Text = ({
    text,
    variation,
    color = 'inherit'
}: TextProps) => {
    return (
        <span
            style={{
                color,
                ...TEXT_STYLES[variation]
            }}
            // Для возможности парсить теги и спецсимволы
            dangerouslySetInnerHTML={{__html: xss(text)}}
        />
    );
}