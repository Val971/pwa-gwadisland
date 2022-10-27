import { isMobile } from 'react-device-detect';
import { MdLocationOn } from 'react-icons/md';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import Rating from '@mui/material/Rating';

import './styles/tourCard.scss';

export default function TourCard({ post, handleViewTour }: any) {
  return (
    <div className="tour-card-content" onClick={() => handleViewTour(post.id)}>
      <LazyLoad>
        <img alt="About img" src={`${post.cover}`} />
      </LazyLoad>
      <div className="tour-card-desc">
        <p>Span, discover</p>
        <div className="card-star">
          <MdLocationOn />
          {post.city}
        </div>
        <div className="star">
          <Rating name="read-only" value={post.stars} readOnly />({post.stars})
        </div>
        <p className="desc">{post.desc.substring(0, 60)}...</p>
        {!isMobile && (
          <li>
            <Link className="ctn" to="/register">
              Read More
            </Link>
          </li>
        )}
      </div>
    </div>
  );
}
