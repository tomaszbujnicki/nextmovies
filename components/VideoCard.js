import React from 'react';
import Button from './Button';
import Image from './Image';
import { usePopup } from '../context/PopupProvider';
import styles from './styles/VideoCard.module.css';
import Player from './Player';

const VideoCard = ({ video }) => {
  const { setValue } = usePopup();

  return (
    <div className={styles.root}>
      <Button onClick={() => setValue(<Player video={video} />)}>
        <Image
          id={video.key}
          media={video.site}
          width={480}
          height={video.site === 'YouTube' ? 360 : 270}
          placeholder="no-video.svg"
        />
      </Button>
    </div>
  );
};

export default VideoCard;
