import Head from '../../components/Head';
import Header from '../Production/Header';
import DetailSection from '../Production/DetailSection';
import CastSection from '../Production/CastSection';
import CardListSection from '../Production/CardListSection';

const Movie = ({ data }) => {
  console.log(data);
  const poster = data.poster_path;
  const backdrop = data.backdrop_path;
  const title = data.title;
  const genres = data.genres;
  const rating = data.vote_average;
  const runtime = data.runtime;
  const releaseDate = data.release_date;
  const certification = data.release_dates;
  const cast = data.credits.cast;
  const crew = data.credits.crew;
  const overview = data.overview;
  const tagline = data.tagline;
  const homepage = data.homepage;
  const externals = data.external_ids;
  const keywords = data.keywords.keywords;
  const budget = data.budget;
  const revenue = data.revenue;
  const originalLanguage = data.originalLanguage;
  const reviews = data.reviews.results;
  const recommendations = data.recommendations.results;
  const similar = data.similar.results;
  const videos = data.videos.results
    .map((video) => ({
      ...video,
      videoKey: video.key,
    }))
    .reverse();

  return (
    <>
      <Head title={`${title} (${releaseDate?.slice(0, 4)})`} />

      <Header
        img={backdrop}
        title={title}
        genres={genres}
        rating={rating}
        releaseDate={releaseDate}
        runtime={runtime}
      />

      <DetailSection
        poster={poster}
        overview={overview}
        tagline={tagline}
        homepage={homepage}
        externals={externals}
        keywords={keywords}
        budget={budget}
        revenue={revenue}
        originalLanguage={originalLanguage}
        crew={crew}
      />

      <CardListSection title="Videos" type="video" arr={videos} />

      <CastSection cast={cast} crew={crew} />

      <CardListSection title="Reviews" type="review" arr={reviews} />

      <CardListSection
        title="Recommendations"
        type="movie"
        arr={recommendations}
      />

      <CardListSection title="Similar Movies" type="movie" arr={similar} />
    </>
  );
};

export default Movie;
