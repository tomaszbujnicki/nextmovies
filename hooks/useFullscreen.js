import { useState, useEffect } from 'react';

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreen);
    };
  }, []);

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const enterFullscreen = () => {
    const documentElement = document.documentElement;
    if (documentElement.requestFullscreen) {
      documentElement.requestFullscreen();
    } else if (documentElement.mozRequestFullScreen) {
      documentElement.mozRequestFullScreen();
    } else if (documentElement.webkitRequestFullscreen) {
      documentElement.webkitRequestFullscreen();
    } else if (documentElement.msRequestFullscreen) {
      documentElement.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return [isFullscreen, toggleFullscreen];
};

export default useFullscreen;
