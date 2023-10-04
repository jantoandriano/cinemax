import React from 'react';

import './style.scss';
import Img from '../lazyLoadImage/img';
import PosterFallback from '../../assets/no-poster.png';

const MovieCard = ({ data }) => {
  return (
    <div className="movieCard">
      <div className="posterBlock">
        <Img className="posterImg" src={data.poster ? data.poster : PosterFallback} />
      </div>
      <div className="textBlock">
        <span className="title">{data.title}</span>
        <span className="date">{data.year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
