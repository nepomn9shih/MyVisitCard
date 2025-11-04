import * as React from 'react';
import {Hr} from './styles';
import {AboutMeTextBlockProps} from './types';

export const AboutMeTextBlock = ({text, isDarkMode, isLast}: AboutMeTextBlockProps) => {
    return (
        <>
            <p>{text}</p>
            <br/>
            {!isLast && <Hr dark={isDarkMode}/>}
        </>
    )
};