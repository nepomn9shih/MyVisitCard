import * as React from 'react';

import {StyledHr} from './styles';
import {AboutMeTextBlockProps} from './types';
import { Text } from '../../../ui-kit/components/Text';

/** Блок текста раздела "Обо мне" */
export const AboutMeTextBlock = ({
    text,
    isLast,
    className
}: AboutMeTextBlockProps) => {
    return (
        <div className={className}>
            <Text variation='descriptionL' text={text} />
            <br/><br/>
            {!isLast && <StyledHr />}
        </div>
    );
};