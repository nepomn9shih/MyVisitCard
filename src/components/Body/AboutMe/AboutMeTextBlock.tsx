import * as React from 'react';
import { Hr } from './styles';
import { AboutMeTextBlockProps } from './types';

export const AboutMeTextBlock = ({text, isDarkMode}: AboutMeTextBlockProps) => {
    return (
        <>
            <p>{text}</p>
            <br/>
            <Hr dark={isDarkMode}/>
        </>
    )
};