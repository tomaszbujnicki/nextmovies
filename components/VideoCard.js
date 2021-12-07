import React, { useState } from 'react';
import Button from './Button';
import Image from './Image';
import { PlayerInModal } from './Player';
import styles from './styles/VideoCard.module.css';

const VideoCard = ({ videoKey, site }) => {
  const [videoExists, setVideoExists] = useState(null);
  const [isPlayerOn, setIsPlayerOn] = useState(false);

  if (videoExists === false)
    return (
      <Image id="no-video.svg" media="placeholder" width={480} height={360} />
    );

  return (
    <div className={styles.root}>
      <Button onClick={() => setIsPlayerOn(true)}>
        <Image
          id={videoKey}
          media={site}
          width={480}
          height={site === 'YouTube' ? 360 : 270}
          onError={() => setVideoExists(false)}
        />
      </Button>
      {isPlayerOn && (
        <PlayerInModal
          site={site}
          id={videoKey}
          closeCallback={() => setIsPlayerOn(false)}
        />
      )}
    </div>
  );
};

export default VideoCard;
