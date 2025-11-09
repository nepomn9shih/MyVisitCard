import {Suspense} from 'react';
import ReactPlayer from 'react-player';

import {ContentTitleBlock} from '../../../ui-kit/components/ContentTitleBlock';
import {
  StyledVideoBlock,
  StyledVideoContent
} from "./styles";

/** Раздел "Видео" */
export const Video = () => {
  try {
    return (
      <StyledVideoBlock className="qa-video-block">
        <ContentTitleBlock text='Видео выступлений' />
        <StyledVideoContent className="qa-video-block-content">
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
        </StyledVideoContent>
      </StyledVideoBlock>
    );
} catch (error) {
    console.log(error);

    return null;
  }
};