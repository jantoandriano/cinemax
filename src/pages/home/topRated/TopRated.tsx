import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import CarouselV2 from '../../../components/carousel/CarouselV2';

type Props = {
  data: any[];
  loading: boolean;
}


const TopRated: React.FC<Props> = ({data, loading}) => {

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
      </ContentWrapper>
      <CarouselV2 data={data} loading={loading} />
    </div>
  );
};

export default TopRated;
