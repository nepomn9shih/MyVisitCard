import * as React from 'react';
import { Hr } from './styles';

export const AboutMeTextBlock = ({text, isDarkMode}: {text: string, isDarkMode: boolean}) => {
    return (
        <>
            <p>{text}</p>
            <br/>
            <Hr dark={isDarkMode}/>
        </>
    )
};