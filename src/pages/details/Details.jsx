import React from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useGetMovieDetail } from '../../services/useGetMovieDetail';

const Details = () => {
  const { id } = useParams();
  const { movieDetail, loading } = useGetMovieDetail(id);

  return (
    <div>
      <DetailsBanner data={movieDetail} loading={loading}  />
    </div>
  );
};

export default Details;
