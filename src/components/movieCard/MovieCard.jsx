import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import './style.scss';
import Img from '../lazyLoadImage/img';
import PosterFallback from '../../assets/no-poster.png';

const MovieCard = ({ data }) => {
  const { url } = useSelector((state) => state.home);
  const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallback;
  return (
    <div className="movieCard">
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">{dayjs(data.release_date).format('MMM D, YYYY')}</span>
      </div>
    </div>
  );
};

export default MovieCard;
