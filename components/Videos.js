import React from 'react';
import VideoCard from './VideoCard';
import { VideoCarousel } from './Carousel';

const Videos = ({ data }) => {
  if (!Array.isArray(data) || !data.length) return null;

  return (
    <VideoCarousel>
      {data.map((video) => (
        <div key={video.id}>
          <VideoCard video={video} />
        </div>
      ))}
    </VideoCarousel>
  );
};

export default Videos;
