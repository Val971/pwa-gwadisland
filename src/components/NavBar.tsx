import { useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useUserAuth } from '@/context/UserAuthContext';

import './styles/navBar.scss';

export default function Navbar() {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navRef: any = useRef(null);
  const navBarRef: any = useRef(null);
  const iconRef: any = useRef(null);
  const navigate = useNavigate();
  const location: any = useLocation();
  const { logOut, user }: any = useUserAuth();
  const open = Boolean(anchorEl);
  const navColor = location.state;
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    logOut();
    handleClose();
  };
  const showNavbar = () => {
    setOpenResponsiveMenu(!openResponsiveMenu);
    if (navRef && navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
    if (iconRef && iconRef.current) {
      iconRef.current.classList.toggle('menu-btn-hamburger');
    }
    if (navBarRef && navBarRef.current) {
      navBarRef.current.classList.toggle('navBarRef');
    }
  };
  const hashHandle = (hash: string) => {
    window.location.href = hash;
    showNavbar();
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  const changeColor = ['/login', '/register', '/post-view'].some((element) => {
    if (location.pathname.includes(element)) return true;
  });

  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav
      id="welcome"
      ref={navBarRef}
      className={`navbar ${isScrolling ? 'isScrolling' : ''} ${
        navColor && navColor.navTransparent === false ? 'navbarColor' : 'navbartransparent'
      }`}
    >
      <div
        style={{
          display: `${
            isMobile
              ? !navRef.current || navRef.current.className === 'nav-links'
                ? 'block'
                : 'none'
              : ''
          }`,
        }}
      >
        {changeColor && isMobile ? (
          <IoIosArrowBack size={24} onClick={() => navigate(-1)} className=" ico" />
        ) : (
          <Link
            state={{ navTransparent: true }}
            to="/#welcome"
            onClick={() => hashHandle('#welcome')}
          >
            <h1 className="logo" style={{ color: isScrolling ? '#FFF' : '#373f41' }}>
              APPNAME
            </h1>
          </Link>
        )}
      </div>

      <nav ref={navRef} className="nav-links">
        <li className={splitLocation[1] === '' ? 'active' : ''}>
          <Link
            onClick={() => hashHandle('#welcome')}
            state={{ navTransparent: true }}
            to="/#welcome"
          >
            Home
          </Link>
        </li>
        <li className={splitLocation[1] === 'about' ? 'active' : ''}>
          <Link onClick={() => hashHandle('#about')} state={{ navTransparent: true }} to="/#about">
            About
          </Link>
        </li>
        <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
          <Link
            onClick={() => hashHandle('#contact')}
            state={{ navTransparent: true }}
            to="/#contact"
          >
            Contact
          </Link>
        </li>
        {user && (
          <>
            <li>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar>
                  {user.displayName && user.displayName.substring(0, 2).toUpperCase()}
                </Avatar>
              </IconButton>
            </li>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Add post</MenuItem>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </>
        )}
        {!user && (
          <>
            <li>
              <Link
                state={{ navTransparent: false }}
                onClick={() => showNavbar()}
                className="ctn"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                state={{ navTransparent: false }}
                onClick={() => showNavbar()}
                className="ctn-full"
                to="/register"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </nav>
      {/* <div className='account'>
      <HiOutlineUserCircle size={24} style={{color: isScrolling || changeColor  ?'#FFF':'#373f41'}}/> 
      </div> */}

      {!openResponsiveMenu && (
        <div ref={iconRef} className="menu-btn">
          <GiHamburgerMenu
            size={24}
            style={{ color: isScrolling || changeColor ? '#FFF' : '#373f41' }}
            onClick={showNavbar}
          />
        </div>
      )}
      {openResponsiveMenu && (
        <AiOutlineClose size={24} onClick={showNavbar} className="menu-btn btn-close" />
      )}
    </nav>
  );
}
