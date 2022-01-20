import React, { useState } from 'react';
import Button from './Button';
import Image from './Image';
import Player from './Player';
import Modal from './Modal';
import styles from './styles/VideoCard.module.css';
import SVG_Play from '../assets/play.svg';

const VideoCard = ({ videoKey, site }) => {
  const [videoExists, setVideoExists] = useState(null);
  const [isPlayerOn, setIsPlayerOn] = useState(false);

  if (videoExists === false)
    return (
      <Image
        id="no-video.svg"
        media="placeholder"
        width={480}
        height={360}
        layout="responsive"
      />
    );

  return (
    <div className={styles.root}>
      <Button className={styles.rootButton} onClick={() => setIsPlayerOn(true)}>
        <Image
          className={styles.Image}
          id={videoKey}
          layout="responsive"
          media={site}
          width={480}
          height={site === 'YouTube' ? 360 : 270}
          onError={() => setVideoExists(false)}
        />
        <SVG_Play className={styles.svg} />
      </Button>
      {isPlayerOn && (
        <Modal closeCallback={() => setIsPlayerOn(false)}>
          <Player
            site={site}
            id={videoKey}
            onEnd={() => setIsPlayerOn(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default VideoCard;
