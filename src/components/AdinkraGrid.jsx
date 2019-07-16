import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import first from "../../static/adrinkas/1.png";
import AdinkraItemGrid from './AdinkraItemGrid';

import ad1 from '../../static/adrinkas/1.png';
import ad1a from '../../static/adrinkas/1a.png';
import ad2a from '../../static/adrinkas/2a.png';
import ad2 from '../../static/adrinkas/2.png';
import ad3 from '../../static/adrinkas/3.png';
import ad3a from '../../static/adrinkas/3a.png';
import ad4a from '../../static/adrinkas/4a.png';
import ad4 from '../../static/adrinkas/4.png';

export const adinkraDataExample = {
  id: 1,
  text: "Este adinkra significa isso muito importe, pois o significado esta descrito aqui.",
  title: "Esperança (okuara)"
}


export default class ScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: 1000

    };
    this.widthCalculation = this.widthCalculation.bind(this);

    this.populateAdinkraGrid = this.populateAdinkraGrid.bind(this);
    this.returnAdinkraItem = this.returnAdinkraItem.bind(this);
    this.chooseAdinkra = this.chooseAdinkra.bind(this);
  }

  widthCalculation() {
    let innerWidth = window.innerWidth; //A
   
    this.setState({
      innerWidth: innerWidth
    });
  }

 
  



    render() {
      const {level, opacity} = this.props;
      return (
          this.populateAdinkraGrid(level, opacity)
      );
    }
  }
  ScrollBar.propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.numberisRequired
  };
  
  ScrollBar.defaultProps = {
    level: 0,
    opacity: 0.5
  };