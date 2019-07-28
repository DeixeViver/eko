import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import first from "../../static/adrinkas/1.png";
import css from '@emotion/css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '500px',
    paddingBottom         : 0,
    paddingRight          : 0,
    paddingLeft           : 0,
    borderRadius          : "12px"
  }
};

const AdinkraLineItem = styled.div`
  margin: 5px 10px;
  padding: 0.1 0.3rem;
  transition: 1s;
  border-radius: 50%;
  flex: 1 0 21%; 
  max-width: 80px;
  cursor: pointer;

  @media screen and (max-width: ${Theme.breakpoints.s}){
    margin: 0 2px;
    padding: 0.1rem;
  }

  @media screen and (max-width: 375px){
    flex: 1 0 10%; 

  }

  &:hover {
    background-color: white;
    transition: 1s;
  }

  & img {
    margin: 0;
    max-width: 60px;
    display: block;
    margin: 0 auto;
  }
`;

export default class AdinkraItemGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      modalIsOpen: false,
      modalContent: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }


  componentDidMount() {
  }

  openModal(adinkra, text, title) {
    let modalContent = {adinkra, text, title}
    this.setState({modalIsOpen: true, modalContent});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    console.log("oiii:")
    this.setState({modalIsOpen: false});
    console.log(this.state)
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

    render() {
      const {adinkra, text, title } = this.props;
      return (
        <AdinkraLineItem onClick={() => this.openModal(adinkra, text, title)} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
            <img src={adinkra}/>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div style={{display: "flex", flexDirection: "row"}}>
                <img style={{maxWidth: "200px", marginBottom: 0}} src={this.state.modalContent.adinkra} />
                <div>
                  <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.modalContent.title}</h2>
                  <p>{this.state.modalContent.text}</p>
                </div>
              </div>
              <a style={{width: "100%", backgroundColor: Theme.colors.orange.base, color: Theme.colors.white.base, textAlign: "center", display: 'block', cursor: "pointer"}} onClick={this.closeModal}>Fechar</a>
            </Modal>
        </AdinkraLineItem>
      );
    }
  }
  AdinkraItemGrid.propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.numberisRequired
  };
  
  AdinkraItemGrid.defaultProps = {
    adinkra: '',
    text:'',
    title: ""
  };