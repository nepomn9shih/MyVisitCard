import {StyledHr} from './styles';
import type {AboutMeTextBlockProps} from './types';
import {Text} from '../../../ui-kit/components/Text';

/** Блок текста раздела "Обо мне" */
export const AboutMeTextBlock = ({
    text,
    isLast,
    className
}: AboutMeTextBlockProps) => {
    return (
        <div className={className}>
            <Text
                variation='descriptionL'
                color='var(--secondary-text-color)'
                text={text}
            />
            <br/><br/>
            {!isLast && <StyledHr />}
        </div>
    );
};