import React from 'react';
import './style.scss';

import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import { useGetMovies } from '../../services/useGetMovies';
import { useGetTvShows } from '../../services/useGetTvShows';

const TvShows = () => {
    const { allMovies, loading } = useGetMovies();
    const { allshows } = useGetTvShows();
    console.log("---", allshows);


    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                    <div className="pageTitle">
                        Tv Shows
                    </div>
                </div>
                {loading && <Spinner initial={true} />}
                {!loading && (
                    <>
                        {allMovies?.length > 0 ? (
                            <div className='content'>
                                {allMovies?.map((item, index) => (
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
