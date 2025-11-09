import {TextVariations} from "./types";

export const TEXT_STYLES: Record<TextVariations, React.CSSProperties> = {
    titleS: {
        fontSize: '18px',
        lineHeight: 1.4,
        fontWeight: 'bold'
    },
    titleM: {
        fontSize: '20px',
        lineHeight: 1.4,
        fontWeight: 'bold'
    },
    titleL: {
        fontSize: '24px',
        lineHeight: 1.4,
        fontWeight: 'bold'
    },
    titleXL: {
        fontSize: '30px',
        lineHeight: 1.4,
        fontWeight: 'bold'
    },
    descriptionS: {
        fontSize: '14px',
        lineHeight: 1.4,
        fontWeight: 400
    },
    descriptionM: {
        fontSize: '16px',
        lineHeight: 1.4,
        fontWeight: 400
    },
    descriptionL: {
        fontSize: '18px',
        lineHeight: 1.4,
        fontWeight: 400
    },
    descriptionXL: {
        fontSize: '20px',
        lineHeight: 1.4,
        fontWeight: 400
    }
};