import React from 'react';
import Button from './Button';
import Image from './Image';
import { usePopup } from '../context/PopupProvider';
import styles from './styles/VideoCard.module.css';
import Player from './Player';

const VideoCard = ({ videoKey, site }) => {
  const { setValue } = usePopup();

  return (
    <div className={styles.root}>
      <Button onClick={() => setValue(<Player site={site} id={videoKey} />)}>
        <Image
          id={videoKey}
          media={site}
          width={480}
          height={site === 'YouTube' ? 360 : 270}
          placeholder="no-video.svg"
        />
      </Button>
    </div>
  );
};

export default VideoCard;
