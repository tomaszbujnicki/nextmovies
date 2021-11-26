import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Image from './Image';
import styles from './styles/VideoCard.module.css';

const VideoCard = ({ video }) => {
  return (
    <div className={styles.root}>
      <Image
        id={video.key}
        media="youtube"
        width={480}
        height={360}
        placeholder="no-video"
      />
    </div>
  );
};

export default VideoCard;

/*

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
  return
<YouTube videoId={video.key} opts={opts} onReady={_onReady} />
  */
