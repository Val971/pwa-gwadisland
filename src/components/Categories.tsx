import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';

import CategoriesList from './CategoriesItem';
import Chips from './Chips';
import './styles/categories.scss';
import { PostsList } from './utils/data';

export default function Categories() {
  const [mostPopularList, setMostPopularList] = useState([]);
  const [recommendedList, setRecommendedList] = useState([]);
  const [category, setCategory] = useState('all');
  let navigate = useNavigate();
  let CarouselD: any = Carousel;
  const RMCarousel = CarouselD.default ? CarouselD.default : Carousel;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const viewPost = (id: number) => {
    navigate(`/post-view/${id}`);
  };
  const handleSetCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    if (!PostsList) {
      return;
    }
    let mostPolurad = PostsList.filter((post: any) => post.record === 'populard');
    let recommended = PostsList.filter((post: any) => post.record === 'recommended');

    if (mostPolurad.length > 0) {
      setMostPopularList(mostPolurad);
    }
    if (recommended.length > 0) {
      setRecommendedList(recommended);
    }
  }, [PostsList]);

  return (
    <div className="categorie-content">
      <div className="categorie-content-header">
        <h2>Categories</h2>
        <Chips category={category} handleCategory={handleSetCategory} />
      </div>
      <div className="categorie-content-list">
        <div className="categorie-list-header">
          <p className="categorie-list-filter">Most Popular</p>
          <p id="underline">View all</p>
        </div>

        <div className="categorie-content-list-item">
          <RMCarousel
            deviceType={isMobile ? 'mobile' : 'desktop'}
            itemClass="image-item"
            responsive={responsive}
          >
            {recommendedList.map((post: any) => {
              return <CategoriesList key={post.id} handleViewPost={viewPost} post={post} />;
            })}
          </RMCarousel>
        </div>
        <div className="categorie-list-header">
          <p className="categorie-list-filter">Recommended</p>
          <p id="underline">View all</p>
        </div>

        <div className="categorie-content-list-item">
          <RMCarousel
            ssr
            deviceType={isMobile ? 'mobile' : 'desktop'}
            itemClass="image-item"
            responsive={responsive}
          >
            {mostPopularList.map((post: any) => {
              return <CategoriesList key={post.id} handleViewPost={viewPost} post={post} />;
            })}
          </RMCarousel>
        </div>
      </div>
    </div>
  );
}
