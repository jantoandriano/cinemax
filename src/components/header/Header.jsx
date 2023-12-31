import React, { useState, useEffect } from 'react';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

import './style.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movix-logo.svg';

const Header = () => {
  const [search, setSearch] = useState('')
  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('show');
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow('top');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar);
    return () => {
      window.removeEventListener('scroll', controlNavBar);
    };
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const onSearch = (event) => {
    const search = event.target.value
    setSearch(search);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="" width="80" height="30" />
        </div>


        <ul className="menuItems">
          <li className="menuItem" onClick={() => { navigate("movies") }}>Movies</li>
          <li className="menuItem" onClick={() => { navigate("tvshows") }}>Tv Shows</li>
          <li className="menuItem" onClick={() => { navigate("mylist") }}>My List</li>
          <li className="menuItem" onClick={() => { navigate("login") }}>Login</li>
          <li className="menuItem" onClick={() => { navigate("about") }}>About</li>
          <li>
            <form onSubmit={onSubmit}>
              <input type='text' value={search} placeholder='Search' onChange={onSearch} />
            </form>
          </li>
        </ul>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
