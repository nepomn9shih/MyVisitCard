import {Suspense} from 'react';
import ReactPlayer from 'react-player';

import {
  VideoBlock,
  VideoTitle,
  VideoContent
} from "./styles";

export const Video = ({isDarkMode}: {isDarkMode: boolean}) => {
  try {
    return (
      <VideoBlock dark={isDarkMode}>
        <VideoTitle dark={isDarkMode}>
          Видео выступлений
        </VideoTitle>
        <VideoContent dark={isDarkMode}>
          <Suspense fallback={() => <div>Загружаю видео</div>}>
            <ReactPlayer
              src='https://www.youtube.com/watch?v=mhJWbrMfNNo&list=PLIZR3nsCfy888mzTbQ-LwNExi7A1GYE21&index=4&t=11s'
              controls={true}
              style={{
                width: '400px',
                height: '250px'
              }}
            />
            <ReactPlayer
              src='https://www.youtube.com/watch?v=DmU0gDp9pYQ'
              controls={true}
              style={{
                width: '400px',
                height: '250px'
              }}
            />
          </Suspense>
        </VideoContent>
      </VideoBlock>
    );
} catch (error) {
  console.log(error);

  return null;
}
};
