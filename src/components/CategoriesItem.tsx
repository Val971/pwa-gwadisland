import { AiFillStar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import LazyLoad from 'react-lazy-load';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './styles/categoriesItem.scss';

export default function CategoriesItem({ post, handleViewPost }: any) {
  return (
    <div className="post-content" onClick={() => handleViewPost(post.id)}>
      <Card>
        <CardActionArea>
          <LazyLoad width={180} height={140}>
            <img alt={`${post.title}`} style={{ height: '140px' }} src={`${post.cover}`} />
          </LazyLoad>
          <CardContent>
            <Typography className="post-title" gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <div className="rate">
              <div>
                <MdLocationOn />
                {post.city}
              </div>

              <div>
                ({post.stars})<AiFillStar />
              </div>
            </div>
            <Typography className="desc" variant="body2" color="text.secondary">
              {post.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
