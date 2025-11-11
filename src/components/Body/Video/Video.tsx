import {Suspense} from 'react';
import ReactPlayer from 'react-player';

import {Box} from '../../../ui-kit/components/Box';
import {Section} from '../../../ui-kit/components/Section';

/** Раздел "Видео" */
export const Video = () => {
  try {
    return (
      <Section
        className="qa-video-block"
        text='Видео выступлений'
      >
        <Box
          className="qa-video-block-content"
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
          gap='20px'
        >
          <Suspense fallback={() => <div>Загружаю видео</div>}>
            <ReactPlayer
              src='https://www.youtube.com/watch?v=mhJWbrMfNNo&list=PLIZR3nsCfy888mzTbQ-LwNExi7A1GYE21&index=4&t=11s'
              controls={true}
              style={{
                width: '400px',
                height: '250px'
              }}
              className="qa-video-block-video"
            />
            <ReactPlayer
              src='https://www.youtube.com/watch?v=DmU0gDp9pYQ'
              controls={true}
              style={{
                width: '400px',
                height: '250px'
              }}
              className="qa-video-block-video"
            />
          </Suspense>
        </Box>
      </Section>
    );
} catch (error) {
    console.log(error);

    return null;
  }
};