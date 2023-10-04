import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import { useGetMovies } from '../../services/useGetMovies';

const Home = () => {
  const { trending, popular, topRated, loading } = useGetMovies();

  return (
    <div className="homePage">
      <HeroBanner/>
      <Trending data={trending} loading={loading} />
      <Popular data={popular} loading={loading} />
      <TopRated data={topRated} loading={loading} />
    </div>
  );
};

export default Home;
