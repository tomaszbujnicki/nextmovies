import React from 'react';
import Button from './Button';
import Image from './Image';
import YouTube from 'react-youtube';
import { usePopup } from '../context/PopupProvider';
import styles from './styles/VideoCard.module.css';

const VideoCard = ({ video }) => {
  const { setValue } = usePopup();

  return (
    <div className={styles.root}>
      <Button onClick={() => setValue(<VideoFrame id={video.key} />)}>
        <Image
          id={video.key}
          media={video.site}
          width={480}
          height={360}
          placeholder="no-video"
        />
      </Button>
    </div>
  );
};

export default VideoCard;

const VideoFrame = ({ id }) => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      annotations: 3,
      rel: 0,
      controls: 1,
      fs: 0,
    },
  };

  return (
    <div className={styles.VideoFrame}>
      <YouTube
        videoId={id}
        opts={opts}
        containerClassName={styles.youTubeContainer}
        onEnd={() => {
          console.log('end');
        }}
      />
    </div>
  );
};
