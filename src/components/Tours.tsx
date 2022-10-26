import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TourCard from './TourCard';
import './styles/tours.scss';
import { PostsList } from './utils/data';

export default function Tours() {
  const [hotTours, setHotTours] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (!PostsList) {
      return;
    }
    let tours = PostsList.filter((post: any) => post.record === 'hot');

    if (tours.length > 0) {
      setHotTours(tours);
    }
  }, [PostsList]);
  const viewPost = (id: number) => {
    navigate(`/post-view/${id}`);
  };
  return (
    <div className="tours-content">
      <h3>Hot tours</h3>
      <div className="tour-cards">
        {hotTours.length > 0 &&
          hotTours.map((post: any) => {
            return <TourCard handleViewTour={viewPost} post={post} key={post.id} />;
          })}
      </div>
    </div>
  );
}
