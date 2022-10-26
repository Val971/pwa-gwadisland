import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
//import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Chip from '@mui/material/Chip/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import AccordionPost from '@/components/AccordionPost';
import { PostsList } from '@/components/utils/data.js';
import '@/pages/PostView/postView.scss';

export default function PostView() {
  const [post, setPost]: any = useState(null);
  const [imgList, setimgList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let selectedPost = PostsList.find((post: any) => post.id == id);
    if (selectedPost) {
      setPost(selectedPost);
      if (selectedPost.images.length > 0) {
        setimgList(selectedPost.images);
      }
    }
  }, [post]);

  return (
    <>
      {post && (
        <div className="postview">
          <div className="postview-content">
            {post && post.images.length && (
              <img alt="" src={`${post.cover}`} />
              // <Swiper
              //   cssMode={true}
              //   navigation={true}
              //   pagination={false}
              //   autoplay={{
              //     delay: 3000,
              //     disableOnInteraction: false,
              //   }}
              //   mousewheel={true}
              //   keyboard={true}
              //   modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              //   className="mySwiper"
              // >
              //   {post.images.map((url: any) => {
              //     return (
              //       <SwiperSlide
              //         style={{
              //           backgroundImage: `url(${url.img})`,
              //           height: `20rem`,
              //           backgroundPosition: 'center',
              //           backgroundSize: 'cover',
              //         }}
              //       ></SwiperSlide>
              //     );
              //   })}
              // </Swiper>
            )}
            <h3>{post.title}</h3>
            <div className="light-p">
              <div className="contact-line">
                <MdLocationOn size={13} />
                <p>11710 Yonge St Richmond Hill Ontario Canada</p>
              </div>
            </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoMdArrowDropdown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontSize={13}>
                  <span>Closed</span> - Opens 09:00-17:00
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={13}>Lundi Fermé</Typography>
                <Typography fontSize={13}>Mardi 09:00-17:00</Typography>
                <Typography fontSize={13}>Mercredi 09:00-17:00</Typography>
                <Typography fontSize={13}>Jeudi 09:00-17:00</Typography>
                <Typography fontSize={13}>Vendredi 09:00-17:00</Typography>
                <Typography fontSize={13}>Samedi 09:00-13:00</Typography>
                <Typography fontSize={13}>Dimanche Fermé</Typography>
              </AccordionDetails>
            </Accordion>
            <div className="postview-header">
              <div className="chips">
                <Chip className="chips-item" label="Beauty" component="a" href="#" clickable />
                <Chip className="chips-item" label="Sport" component="a" href="#" clickable />
              </div>
              <div className="stars">
                ({post.stars})<AiFillStar size={20} />
              </div>
            </div>

            <div className="postview-contact">
              <div>
                <div className="contact-line">
                  <p>+59 06 90 56 56 85</p>
                </div>
              </div>
            </div>

            <AccordionPost post={post} />

            <ImageList className="post-gallery" cols={2} rowHeight={164}>
              {imgList.map((item: any) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      )}
    </>
  );
}
