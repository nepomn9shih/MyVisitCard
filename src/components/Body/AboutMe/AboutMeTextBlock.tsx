import * as React from 'react';

import {StyledHr} from './styles';
import {AboutMeTextBlockProps} from './types';

/** Блок текста раздела "Обо мне" */
export const AboutMeTextBlock = ({
    text,
    isLast,
    className
}: AboutMeTextBlockProps) => {
    return (
        <div className={className}>
            <p>{text}</p>
            <br/>
            {!isLast && <StyledHr />}
        </div>
    );
};