import {VIDEO_DATA} from '../../constants/videos';
import {Box} from '../../ui-kit/components/Box';
import {Section} from '../../ui-kit/components/Section';
import {VideoBox} from '../../ui-kit/components/VideoBox';

/** Раздел "Видео" */
export const Video = () => {
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
				{VIDEO_DATA.map(
					(props, index) => (<VideoBox key={index} {...props} />)
				)}
			</Box>
      </Section>
    );
};