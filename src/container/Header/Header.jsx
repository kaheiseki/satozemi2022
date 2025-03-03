import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1"> The Key to Machine learning and Fintech </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> subtitle </p>
      <button type="button" className="custom__button">Explore</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cat} alt="header_img" />
    </div>
  </div>
);

export default Header;