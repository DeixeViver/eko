import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import first from "../../static/adrinkas/1.png";

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
      actionPoins: [
        {
          key: 1,
          point: 30,
          text: "Lorem Ipsum Dolor bla bla bla",
          adrinka: first
        },
        {
          key: 2,
          point: 45,
          text: "Lorem Ipsum Dolor bla bla bla",
          adrinka: "../../static/adrinkas/2.png"
        },
        {
          key: 3,
          point: 60,
          text: "Lorem Ipsum Dolor bla bla bla",
          adrinka: "../../static/adrinkas/3.png"
        },
      ],

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
    let scrollMax = Math.ceil( heightIsHtml - innerHeight ); //C = B3 - A
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;//D
    let scrollRate = parseInt( (scrollY / scrollMax) * 100, 10 ); //E = (D / C) *100


    if(scrollRate == 99)
      scrollRate = 100;
    this.setState({
      scrollY: scrollY,
      scrollBarRate: scrollRate,
      scrollMax: scrollMax
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
    
    console.log((e.point * this.state.scrollMax) / 100)
    window.scrollTo(0, (e.point * this.state.scrollMax) / 100);
  }

    render() {
      const {colorSubset, width, height} = this.props;

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
  `
      return (
        <div className="scrollbar"
         style={{
           border: 'solid 1px lightgray', 
           width: "10px",
           backgroundColor: "#eaeaea",
           position: "fixed",
           right: "0px",
           height: "100%",
           zIndex: 1000000,
          borderBottomLeftRadius: "10px",
          opacity: this.state.scrollBarRate >= 10 ? 1 : 0 
         }}
        >
          <ScrollBarStyled/>

          {this.state.actionPoins.map(e => (
            <div onClick={() => this.goToTargetPosition(e)} style={{
              width: '20px',
              height: '20px',
              borderRadius: '20px',
              position: "absolute",
              left: "-5px",
              top: e.point + "%",
              backgroundColor: this.state.scrollBarRate >= e.point ? colorSubset[0] : "#eaeaea",
              zIndex: 100
            }} />
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
    colorSubset: ["#fff", "#eee", "#666"]
  };