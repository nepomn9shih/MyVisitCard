import {Suspense, lazy} from 'react';

import {VideoBoxProps} from './types';
import {Box} from '../Box';
import {Text} from '../Text';
import {Loader} from '../Loader';

const ReactPlayer = lazy(() => import('react-player'));

/** Блок с видео */
export const VideoBox = ({
    src,
    description,
    width = '400px',
    height = '300px'
}: VideoBoxProps) => {
    return (
        <Box
            width={width}
            height={height}
            bgColor='var(--secondary-bg-color)'
            borderRadius='20px'
            p='12px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            className="qa-video-box"
        >
            <Suspense fallback={<Loader />}>
                <ReactPlayer
                    src={src}
                    controls={true}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    className="qa-player"
                />
            </Suspense>
            <Box
                pt='12px'
            >
                <Text
                    variation='descriptionM'
                    color='var(--secondary-text-color)'
                    text={description}
                />
            </Box>
        </Box>
    );
};