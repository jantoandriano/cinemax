import React from 'react';
import './style.scss';

import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import { useGetMyList } from '../../services/useGetMyList';

const TvShows = () => {
    const {list, loading} = useGetMyList();
    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                    <div className="pageTitle">
                        My List
                    </div>
                </div>
                {loading && <Spinner initial={true} />}
                {!loading && (
                    <>
                        {list?.length > 0 ? (
                            <div className='content'>
                                {list?.map((item, index) => (
                                    <MovieCard key={index} data={item} pathname="mylist" />
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
