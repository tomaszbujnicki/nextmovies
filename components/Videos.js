import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import styles from './styles/Videos.module.css';
import VideoCard from './VideoCard';
import { VideoCarousel } from './Carousel';

const site = {
  youTube: 'https://www.youtube.com/watch?v=',
  vimeo: ' https://vimeo.com/',
};

const Videos = ({ data }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(false);
  }, []);

  console.log(data);
  data.forEach((element) => {
    console.log(element.site);
  });

  if (!data) return null;
  return (
    <Section title="Videos">
      <Preview data={data} />
    </Section>
  );
};

export default Videos;

const Preview = ({ data }) => (
  <VideoCarousel>
    {data.map((video) => (
      <div key={video.id}>
        <VideoCard video={video} />
      </div>
    ))}
  </VideoCarousel>
);
