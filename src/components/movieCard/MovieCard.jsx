import React from 'react';

import './style.scss';
import Img from '../lazyLoadImage/img';
import PosterFallback from '../../assets/no-poster.png';
import { useTasksDispatch } from '../../context/myListContext';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ data, pathname }) => {
  const dispatch = useTasksDispatch();
  const navigate = useNavigate();

  const isPageMyList = pathname === 'mylist';
  
  return (
    <div className="movieCard" onClick={() => navigate(`/movies/${data.imdbID}`)}>
      <div className="posterBlock">
        <Img className="posterImg" src={data.poster ? data.poster : PosterFallback} />
      </div>
      <div className="textBlock">
        <span className="title">{data.title}</span>
        <span className="date">{data.year}</span>
      </div>


      {
        isPageMyList ?
          <div className='button' onClick={() => dispatch({
            type: 'remove',
            payload: data.imdbID
          })}>
            Remove from My List
          </div>
          :
          <div className='button' onClick={() => dispatch({
            type: 'added',
            payload: data
          })}>
            Add to My List
          </div>

      }

    </div>
  );
};

export default MovieCard;
