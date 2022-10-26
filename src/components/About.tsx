import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import './styles/about.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div id="about" className="about">
      <LazyLoad>
        <img
          alt="About img"
          className="swiper-lazy"
          src={`/assets/pexels-gerald-yambao-2413238.jpg`}
        />
      </LazyLoad>

      <div className="about-content">
        <h2>Discouvert New Horizon</h2>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="ABOUT US" {...a11yProps(0)} />
              <Tab label="WHY CHOOSE US" {...a11yProps(1)} />
              <Tab label="OUR MISSION" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Wonder Tour is committed to bringing our clients the best in value and quality travel
            arrangements. We are passionate about travel and sharing the world's wonders with you.
          </TabPanel>
          <TabPanel value={value} index={1}>
            We are proud to offer excellent quality and value for money in our tours, which give you
            the chance to experience your chosen destination in an authentic and exciting way.
          </TabPanel>
          <TabPanel value={value} index={2}>
            Our mission is to provide the ultimate travel planning experience while becoming a
            one-stop shop for every travel service available in the industry.
          </TabPanel>
        </Box>
        <div className="about-btn">
          <li>
            {/* <HashLink className="ctn" smooth to="/home#contact">
        Get in Touch
          </HashLink> */}
          </li>
          <li>
            <Link className="ctn-full" to="">
              Read More
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
