import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {ToastsContainer, ToastsStore} from 'react-toasts';
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

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  ScrollRateCalculation() {
    let innerHeight = window.innerHeight; //A
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    let heightIsHtml = rect.height; //B3
    let scrollMax = Math.ceil( heightIsHtml - innerHeight ); //C = B3 - A
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;//D
    let scrollRate = parseInt( (scrollY / scrollMax) * 100, 10 ); //E = (D / C) *100

    if(scrollRate == 30)
      ToastsStore.success("Hey, you just clicked!")

    if(scrollRate == 99)
      scrollRate = 100;
    this.setState({
      scrollY: scrollY,
      scrollBarRate: scrollRate
    });
  }

  componentDidMount() {
    this.ScrollRateCalculation();
    
    document.addEventListener('scroll', this.ScrollRateCalculation);
    window.addEventListener('hashchange', this.ScrollRateCalculation);
    document.addEventListener('click', this.ScrollRateCalculation);
  }

  openModal(e) {
    this.setState({modalIsOpen: true, modalContent: e});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


    render() {
      const {width, height} = this.props;
      return (
        <div className="scrollbar"
         style={{
           border: 'solid 1px lightgray', 
           height: "10px",
           backgroundColor: "transparent",
           position: "fixed",
           top: 0,
           width: "100%",
           zIndex: 1000000
         }}
        >
          <div
            className="scrollbar" 
            id="hoge" style={{
            width: `${this.state.scrollBarRate}%`,
            height: "10px",
            backgroundColor: "#40aa94",
            position: "fixed",
            top: 0,
          }} />

          {this.state.actionPoins.map(e => (
            <div onClick={() => this.openModal(e)} style={{
              width: '20px',
              height: '20px',
              borderRadius: '20px',
              position: "absolute",
              top: 0,
              left: e.point + "%",
              backgroundColor: '#000',
              zIndex: 100
            }} />
          ))}
          <h1>{this.state.scrollBarRate}</h1>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Frase de boa que conecta adrinka com a trilha</h2>
          <img src={first} />
          <div>{this.state.modalContent.text}</div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
        </div>
      );
    }
  }
  ScrollBar.propTypes = {
    //width: PropTypes.number.isRequired,
    height: PropTypes.numberisRequired
  };
  
  ScrollBar.defaultProps = {
    height: 10,
    width: 0
  };