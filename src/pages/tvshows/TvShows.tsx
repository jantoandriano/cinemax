import React from 'react';
import './style.scss';

import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import { useGetTvShows } from '../../services/useGetTvShows';
import { useParams } from 'react-router-dom';

const TvShows = () => {
    const { q } = useParams();
    const { allshows } = useGetTvShows(q ? q : 'spiderman');      

    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                    <div className="pageTitle">
                        Tv Shows
                    </div>
                </div>
                {allshows?.length === 0 && <Spinner initial={true} />}
                {allshows?.length > 0 && (
                    <>
                        {allshows?.length > 0 ? (
                            <div className='content'>
                                {allshows?.map((item, index) => (
                                    <MovieCard key={index} data={item} pathname="tvshows" />
                                ))}
                            </div>

                        ) : (
                            <span className="resultNotFound">Sorry, Results not found!</span>
                        )}
                    </>
                )}
            </ContentWrapper>
        </div>
    );
};

export default TvShows;
