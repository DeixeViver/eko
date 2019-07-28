import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import first from "../../static/adrinkas/1.png";

import ad1 from '../../static/adrinkas/1.png';
import ad2 from '../../static/adrinkas/2.png';
import ad3 from '../../static/adrinkas/3.png';
import ad4 from '../../static/adrinkas/4.png';
import ad5 from '../../static/adrinkas/5.png';
import ad6 from '../../static/adrinkas/6.png';
import ad7 from '../../static/adrinkas/7.png';
import ad8 from '../../static/adrinkas/8.png';
import ad9 from '../../static/adrinkas/9.png';
import ad10 from '../../static/adrinkas/10.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class ScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      scrollBarRate: 0,
      modalContent: {key: 0, point: 0, text: '', adrinka: ''},
      scrollMax: 0,
      width: 0,

      modalIsOpen: false

    };
    this.ScrollRateCalculation = this.ScrollRateCalculation.bind(this);
    this.goToTargetPosition = this.goToTargetPosition.bind(this);
  }

  ScrollRateCalculation() {
    let innerHeight = window.innerHeight;
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    let heightIsHtml = rect.height; //B3
    let widthHtml = rect.width;
    let scrollMax = Math.ceil( heightIsHtml - innerHeight ); //C = B3 - A
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;//D
    let scrollRate = parseInt( (scrollY / scrollMax) * 100, 10 ); //E = (D / C) *100

    if(widthHtml >= 1200)
      scrollRate = scrollRate / 2

    if(scrollRate == 99)
      scrollRate = 100;
    this.setState({
      scrollY: scrollY,
      scrollBarRate: scrollRate,
      scrollMax: scrollMax,
      widthHtml: widthHtml
    });
  }

  componentDidMount() {
    this.ScrollRateCalculation();
    
    document.addEventListener('scroll', this.ScrollRateCalculation);
    window.addEventListener('hashchange', this.ScrollRateCalculation);
    document.addEventListener('click', this.ScrollRateCalculation);
  }

  goToTargetPosition(e){

    console.log(this.state)

    console.log(((e + 3) * this.state.scrollMax) / 100)
    window.scrollTo(0, ((e + 3) * this.state.scrollMax) / 100);
  }

  getAdinkraTobar(adinkra) {
    if(adinkra == 1)
      return ad1;
    else if (adinkra == 2)
      return ad2;
    else if (adinkra == 3)
      return ad3;
    else if (adinkra == 4)
      return ad4;
    else if (adinkra == 5)
      return ad5;
    else if (adinkra == 6)
      return ad6;
    else if (adinkra == 7)
      return ad7;
    else if (adinkra == 8)
      return ad8;
    else if (adinkra == 9)
      return ad9;
    else if (adinkra == 10)
      return ad10;
  }

  render() {
    
    const {colorSubset, actionPoints, actionContent} = this.props;

    const ScrollBarStyled = styled.div`
    height: ${this.state.scrollBarRate}%;
    width: 10px;
    background: linear-gradient(180deg, 
        ${colorSubset[0]} 0%,
        ${colorSubset[1]} 25%,
        ${colorSubset[2]} 100%);
    position: fixed;
    top: 0;
    right: 0;
    border-bottom-left-radius: 10px;

    @media screen and (min-width: 1200px){
      width: 12px;
      right: 10%;
      top: 10%;
      border-radius: 10px;
      max-height: 50%;
    }
  `

    const grayBar = {
      border: 'solid 1px lightgray', 
      width: "10px",
      backgroundColor: "#eaeaea",
      position: "fixed",
      right: "0px",
      height: "100%",
      zIndex: 1000000,
      borderBottomLeftRadius: "10px",
      opacity: this.state.scrollBarRate >= 10 ? 1 : 0 
    };

    const grayBarLarge = {
      border: 'solid 1px lightgray', 
      width: "12px",
      backgroundColor: "#eaeaea",
      position: "fixed",
      right: "10%",
      height: "50%",
      top: "10%",
      zIndex: 1000000,
      borderRadius: "10px",
      opacity: this.state.scrollBarRate >= 5 ? 1 : 0 
    };

      return (
        <div className="scrollbar"
         style={this.state.widthHtml <= 1200 ? grayBar : grayBarLarge}>
          <ScrollBarStyled/>

          {actionPoints.map((e,i) => (
            <div onClick={() => this.goToTargetPosition(e)} style={{
              width: '30px',
              height: '30px',
              borderRadius: '30px',
              position: "absolute",
              left: this.state.widthHtml <= 1200 ? "-18px" : "-9px",
              top: e + "%",
              backgroundColor: this.state.widthHtml <= 1200 ? (this.state.scrollBarRate >= e ? colorSubset[0] : "#eaeaea") :  (this.state.scrollBarRate >= e/2 ? colorSubset[0] : "#eaeaea"),
              zIndex: 100,
              cursor:"pointer"
            }}>
              <img src={this.getAdinkraTobar(actionContent[i])} />
            </div>
          ))}
        </div>
      );
    }
  }
  ScrollBar.propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.numberisRequired
  };
  
  ScrollBar.defaultProps = {
    height: 10,
    width: 0,
    colorSubset: ["#fff", "#eee", "#666"],
    actionPoints: [],
    actionContent: [],
  };