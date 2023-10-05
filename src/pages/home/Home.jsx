import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import { useGetMovies } from '../../services/useGetMovies';

const Home = () => {
  const {trending, topRated, popular} = useGetMovies()


  return (
    <div className="homePage">
      <HeroBanner />
      <Trending data={trending} loading={false} />
      <Trending data={popular} loading={false} />
      <Trending data={topRated} loading={false} />
    </div>
  );
};

export default Home;
