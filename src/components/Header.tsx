import { AiOutlineSearch } from 'react-icons/ai';
import { RiFilter3Fill } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '@/components/styles/header.scss';

import { Search, SearchIconWrapper, StyledInputBase } from '../components/styles/styled';

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="font-weight-light">
          Explore{' '}
          <TypeAnimation
            className="font-weight-bold"
            sequence={[
              'The World', // Types 'One'
              1000, // Waits 1s
              'Your Town', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Your Island', // Types 'Three' without deleting 'Two'
              () => {},
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        <h6>Enjoy the Best Local Destinations with Our application</h6>

        <div className="header-search">
          <Search>
            <SearchIconWrapper>
              <AiOutlineSearch color="#00a693" size={30} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <div className="header-search-btn">
            <RiFilter3Fill size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
