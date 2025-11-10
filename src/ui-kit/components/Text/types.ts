export type TextVariations =
| 'titleXS'
| 'titleS'
| 'titleM'
| 'titleL'
| 'titleXL'
| 'descriptionS'
| 'descriptionM'
| 'descriptionL'
| 'descriptionXL'

export type TextProps = {
    text: string;
    variation: TextVariations;
    color?: React.CSSProperties['color'];
};