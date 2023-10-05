import React from 'react';
import './style.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/img';
import PosterFallback from '../../../assets/no-poster.png';

const DetailsBanner = ({ data, loading }) => {
  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={data.Poster} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.Poster ? (
                      <Img className="posterImg" src={data.Poster} />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.Title}`}
                    </div>
                    <div className="subtitle">{data.Writer}</div>
                    <div className="row">

                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.Plot}</div>
                    </div>
                    <div className="info">

                      <div className="infoItem">
                        <span className="text bold">Country: {''}</span>
                        <span className="text">{data.Country}</span>
                      </div>

                      <div className="infoItem">
                        <span className="text bold">Release Date: {''}</span>
                        <span className="text">
                          {data.Released}
                        </span>
                      </div>

                      <div className="infoItem">
                        <span className="text bold">Runtime: {''}</span>
                        <span className="text">{data.Runtime}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
