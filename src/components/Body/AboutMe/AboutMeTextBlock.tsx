import * as React from 'react';
import {Hr} from './styles';
import {AboutMeTextBlockProps} from './types';

export const AboutMeTextBlock = ({text, isLast}: AboutMeTextBlockProps) => {
    return (
        <>
            <p>{text}</p>
            <br/>
            {!isLast && <Hr />}
        </>
    )
};