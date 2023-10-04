import React, { useState, useEffect } from 'react';
import './style.scss';
import { useGetBanner } from '../../../services/useGetBanner';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const { banner, loading } = useGetBanner();
  console.log(banner);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={banner} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              The ultimate destination for movie lovers. Explore Now..
            </span>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
