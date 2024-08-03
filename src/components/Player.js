import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import Vimeo from '@vimeo/player';
import styles from './styles/Player.module.css';

const Player = ({ site, id, onEnd }) => {
  if (site === 'YouTube') {
    return <YouTubePlayer id={id} onEnd={onEnd} />;
  }
  if (site === 'Vimeo') {
    return <VimeoPlayer id={id} onEnd={onEnd} />;
  }
  return null;
};

export default Player;

const YouTubePlayer = ({ id, onEnd }) => {
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
    <YouTube
      tabIndex="4"
      videoId={id}
      opts={opts}
      containerClassName={styles.PlayerContainer}
      onEnd={onEnd}
    />
  );
};

const VimeoPlayer = ({ id, onEnd }) => {
  const playerContainer = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    setPlayer(new Vimeo(playerContainer.current));
  }, []);

  if (player) {
    player.on('ended', onEnd);
  }

  return (
    <div className={styles.PlayerContainer}>
      <iframe
        ref={playerContainer}
        src={`https://player.vimeo.com/video/${id}?transparent=0;autoplay=1`}
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
};
