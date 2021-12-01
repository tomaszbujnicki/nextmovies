import React from 'react';
import Section from '../components/Section';
import styles from './styles/Videos.module.css';
import VideoCard from './VideoCard';
import { VideoCarousel } from './Carousel';

const Videos = ({ data }) => {
  console.log(data);

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
