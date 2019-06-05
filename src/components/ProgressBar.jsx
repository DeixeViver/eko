import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import person from '../../static/logo/person.jpeg';

import ScrollProgress from 'scrollprogress';

const progressElement = document.querySelector('.progress-bar');

var yScroll = 10;

const progressObserver = new ScrollProgress((x, y) => {
  if(!!progressElement)
    progressElement.style.width = y * 100 + '%';
  
  console.log(progressElement)
  yScroll = y;
});

const ProgressBar = () => (
  <div>


  <div style={progressBarra} className="progress-bar"></div>
  <BarraDisgraca yScroll={yScroll} style={progressBarra} className="progress-bar" />
  </div>
);

export default ProgressBar;

const progressBarra = {
  backgroundColor: 'rebeccapurple',
  height: '5px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  };
  
  const BarraDisgraca = styled.div`
  background-color: rebeccapurple;
  height: 100px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100000;
  width: ${yScroll * 100 + '%'}
  `;
  