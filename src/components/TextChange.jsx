import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme, { theme } from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import first from "../../static/adrinkas/1.png";
import css from '@emotion/css';

const TextChanging = styled.p`
    font-size: 15px;
    transition: 1s;
    @media screen and (min-width: ${theme.breakpoints.m}){
      font-size: 25px;
    }
  `;

export default class AdinkraItemGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: ""
    };

  }


  componentDidMount() {
    this.textChange(0);
  }

  textChange(value) {
    var strings = this.props.strings;
    var retorno = strings[value];
    this.setState({displayMessage: retorno});  
    
    setTimeout(() => this.textChange(value + 1 == strings.length? 0 : value + 1), 3000);
  }
  
    render() {
      const {strings} = this.props;
    
    return (
      <TextChanging>{this.state.displayMessage}</TextChanging>
        
      );
    }
  }
  AdinkraItemGrid.propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.numberisRequired
  };
  
  AdinkraItemGrid.defaultProps = {
    strings: []
  };