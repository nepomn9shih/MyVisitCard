export type TextVariations =
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