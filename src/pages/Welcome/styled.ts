import { styled } from '@mui/system';

const Image = styled('img')({
  width: '10%',
  height: '10%',
  margin: 4,
});
const Section = styled('div')({
  margin: '8rem auto',
  maxWidth: '1227px',
  /* Portrait phones */
  '@media screen and (min-width: 667px)': {},
  /* Phones */
  '@media screen and (max-width: 767px)': {
    margin: '8rem 1rem',
    maxWidth: '1227px',
  },
  /* Tablette */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    margin: '8rem 3.5rem',
  },
});

export { Image, Section };
