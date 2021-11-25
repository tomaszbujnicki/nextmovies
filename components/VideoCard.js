import React from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import styles from './styles/VideoCard.module.css';

const getUrl = (key) => `https://i.ytimg.com/vi/${key}/hqdefault.jpg`;

const VideoCard = ({ video }) => {
  const opts = {
    height: '360',
    width: '480',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      annotations: 3,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className={styles.root}>
      <Image
        src={getUrl(video.key)}
        alt=""
        width={480}
        height={360}
        draggable="false"
      />
      {/* <YouTube videoId={video.key} opts={opts} onReady={_onReady} /> */}
    </div>
  );
};

export default VideoCard;
